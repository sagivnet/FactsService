import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';
import { Fact } from 'src/app/models/fact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.css']
})
export class AllFactsComponent implements OnInit, OnDestroy {
  public facts: Fact[] = []; /*internal state: shallow copy of source*/
  @Input() factsService: FactsService;
  @Input() isAllFacts: boolean;
  private subscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef) {}

    ngOnInit() {
      this.facts = this.factsService.getFacts(); /*initial state with current updated facts list*/
      this.subscription = this.factsService.getFactUpdateListener()
      .subscribe(
        (facts: Fact[]) => {/*called when emitted*/
          this.facts = facts;
        }
      );

      this.cdRef.detectChanges();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}

import { FactsService } from '../../services/facts.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Fact } from 'src/app/models/fact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['./my-facts.component.css']
})
export class MyFactsComponent implements OnInit, OnDestroy {

  public facts: Fact[] = []; /*internal state: shallow copy of source*/
  @Input() factsService: FactsService;
  @Input() isAllFacts: boolean;
  private subscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.facts = this.factsService.getUserFacts(); /*initial state with current updated facts list*/
    this.subscription = this.factsService.getFactUpdateListener()
    .subscribe(
      (facts: Fact[]) => {/*called when emitted*/
        this.facts = facts;
      });

    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

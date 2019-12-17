import { FactsService } from '../../services/facts.service';
import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Fact } from 'src/app/models/Fact.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.css']
})
export class FactsListComponent implements OnInit, OnDestroy {

  public facts: Fact[] = []; /*internal state: shallow copy of source*/

  @Input() factsService: FactsService;
  @Input() isAllFactsListener: Observable<boolean>;
  @Output() isAllFacts: boolean;

  private newFactsSubscription: Subscription;
  private isLoginSubscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.isAllFacts = true;
    if (this.isAllFacts) {
      this.facts = this.factsService.getFacts();
    } else {
      this.facts = this.factsService.getUserFacts();
    }

    this.isLoginSubscription = this.isAllFactsListener
    .subscribe(
      (isAllFacts: boolean) => {
        this.isAllFacts = isAllFacts;

        if (isAllFacts) {
          this.facts = this.factsService.getFacts();
        } else {
          this.facts = this.factsService.getUserFacts();
        }
        this.cdRef.detectChanges();
      });

    this.newFactsSubscription = this.factsService.getFactUpdateListener()
    .subscribe(
      (facts: Fact[]) => {/*called when emitted*/ /*TODO: BUG */
        this.facts = facts;
        this.cdRef.detectChanges();
      });

    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.newFactsSubscription.unsubscribe();
    this.isLoginSubscription.unsubscribe();
  }
}

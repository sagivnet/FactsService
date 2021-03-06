import { Component, Input, Output, OnInit } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-facts-header',
  templateUrl: './facts-header.component.html',
  styleUrls: ['./facts-header.component.css']
})
export class FactsHeaderComponent implements OnInit  {

  private isAllFactsUpdate = new /*event emitter*/Subject/*passing*/<boolean>();

  @Input()  factsService: FactsService;
  @Output() isAllFactsListener: Observable<boolean> = this.isAllFactsUpdate.asObservable();

  constructor() {}

  ngOnInit() {
    this.isAllFactsUpdate.next(true);
  }

  displayAllFacts() {
    this.isAllFactsUpdate.next(true);
    this.factsService.changeToAllFacts();
  }
  displayMyFacts() {
    this.isAllFactsUpdate.next(false);
    this.factsService.changeToMyFacts();
  }
}

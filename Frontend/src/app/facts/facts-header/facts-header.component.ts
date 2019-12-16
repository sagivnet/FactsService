import { Component, Input, Output } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';

@Component({
  selector: 'app-facts-header',
  templateUrl: './facts-header.component.html',
  styleUrls: ['./facts-header.component.css']
})
export class FactsHeaderComponent  {
  @Input() factsService: FactsService;
  @Output() isAllFacts = true;

  constructor() {}

  displayAllFacts() {
    this.isAllFacts = true;
    this.factsService.changeToAllFacts();
  }
  displayMyFacts() {
    this.isAllFacts = false;
    this.factsService.changeToMyFacts();
  }
}

import { FactsService } from 'src/app/services/facts.service';
import { Component , Input } from '@angular/core';
import { Fact } from 'src/app/models/fact.model';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent {
  @Input() fact: Fact;
  @Input() factsService: FactsService;
  @Input() isAllFacts: boolean;

  constructor() { }

  onDelete() {
    this.factsService.deleteFact(this.fact);
  }

}

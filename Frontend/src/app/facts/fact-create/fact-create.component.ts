import { FactsService } from '../../services/facts.service';
import { Component , Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fact-create',
  templateUrl: './fact-create.component.html',
  styleUrls: ['./fact-create.component.css']
})
export class FactCreateComponent {
  @Input() factsService: FactsService;
  constructor() {}

  onAddFact(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.factsService.addFact({text: form.value.msgText, _id: ""}); //TODO:
    form.reset();
  }
}

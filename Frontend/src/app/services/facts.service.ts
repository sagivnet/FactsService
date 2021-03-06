import { Fact } from '../models/Fact.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({providedIn: 'root'})
export class FactsService {

  apiService: ApiService;
  private facts: Fact[] = []; /*source*/
  private factsUpdated = new /*event emitter*/Subject/*passing*/<Fact[]>();
  private allFacts = true;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  // Returns a shallow copy of facts (for immutability)
  getFacts() {
    this.apiService.get('/facts').toPromise()
      .then(facts => {
        const tempFacts = [];
        facts.map(res => tempFacts.push({text: res.text, user: res.user}));
        this.facts = tempFacts;
        /*inform listeners*/
        this.factsUpdated.next(/*shallow copy*/[...this.facts]);
      })
      .catch(err => console.log(err));


    return [...this.facts];
  }

    // Returns a shallow copy of myfacts
    getUserFacts() {
      this.apiService.get('/facts/user').toPromise()
        .then(facts => {
          this.facts = facts;

          /*inform listeners*/
          this.factsUpdated.next(/*shallow copy*/[...this.facts]);
        })
        .catch(err => console.log(err));
      return [...this.facts];
    }
  // Returns an event listener as an Observable which we can listen to
  getFactUpdateListener(): Observable<Fact[]> {
    return this.factsUpdated.asObservable();
  }

  // Adds new fact to state and informs listeners

  addFact(fact: Fact) {
    this.apiService.post('/facts', {text: fact.text}).subscribe(
      (() => {
        if (this.allFacts) {
          this.getFacts();
        } else {
          this.getUserFacts();
        }
      })
    );
  }

  deleteFact(fact: Fact) {
    this.apiService.delete('/facts/' + fact._id).subscribe(
      (() => {
        if (this.allFacts) {
          this.getFacts();
        } else {
          this.getUserFacts();
        }
      })
    );
  }

  changeToMyFacts() {
    this.allFacts = false;
  }
  changeToAllFacts() {
    this.allFacts = true;
  }
}

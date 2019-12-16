import { FactsService } from './services/facts.service';
import { Component,  Output } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() factsService: FactsService; /*SINGLETON*/



  constructor(
    @Output() public apiService: ApiService, /*SINGLETON*/
  ) {
    this.factsService = new FactsService(apiService);
  }

  userId = 'user';
  token = 'token';

  displayAuth() {
    this.apiService.setIsLoggedIn(false);
  }
  displayApp() {
    this.apiService.setIsLoggedIn(true);
  }
}

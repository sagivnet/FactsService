import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {
  token = '';
  @Input() apiService: ApiService;

  constructor() {}

  handleLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const body = {email: form.value.email, password: form.value.password};
    this.apiService.post('/user/login', body).toPromise()
      .then(data => {
        this.apiService.setToken(data.message); /*for identification in the server*/
        console.log('Login is complete'); // VERBOSE
      })
      .catch(err => {
        console.log(err.error);
      });
    form.reset();
  }
}

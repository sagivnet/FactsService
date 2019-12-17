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
    .then(user => {
      if (user.name) {
        this.apiService.logIn(user);
      } else {
        console.log('Password incorrect');
      }
    })
    .catch(err => {
    });
    form.reset();
  }
}

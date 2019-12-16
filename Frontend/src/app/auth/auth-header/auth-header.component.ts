import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent {
  @Input() apiService: ApiService;
  token = '';
  isLogin = true;

  constructor() {}
}

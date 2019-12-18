import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FactCreateComponent } from './facts/fact-create/fact-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips'

import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AuthHeaderComponent } from './auth/auth-header/auth-header.component';
import { AuthRegisterComponent } from './auth/auth-register/auth-register.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { FactsHeaderComponent } from './facts/facts-header/facts-header.component';
import { FactComponent } from './facts/fact/fact.component';
import { FactsListComponent } from './facts/facts-list/facts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FactCreateComponent,
    HeaderComponent,
    AuthHeaderComponent,
    AuthRegisterComponent,
    AuthLoginComponent,
    FactsHeaderComponent,
    FactComponent,
    FactsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    Ng2CarouselamosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

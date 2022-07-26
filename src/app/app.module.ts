import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { CodeOfValuesComponent } from './code-of-values/code-of-values.component';
import { PoliciesWalkthroughComponent } from './policies-walkthrough/policies-walkthrough.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { MandatoryTrainingsComponent } from './mandatory-trainings/mandatory-trainings.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './auth/login.guard';
import { IsLoggedIn } from './services/is-logged-in.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    CodeOfValuesComponent,
    PoliciesWalkthroughComponent,
    ChecklistComponent,
    MandatoryTrainingsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginGuard,IsLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }

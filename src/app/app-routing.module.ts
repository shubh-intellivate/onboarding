import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { CodeOfValuesComponent } from './code-of-values/code-of-values.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { MandatoryTrainingsComponent } from './mandatory-trainings/mandatory-trainings.component';
import { PoliciesWalkthroughComponent } from './policies-walkthrough/policies-walkthrough.component';
import { LoginGuard } from './auth/login.guard';
import { IsLoggedIn } from './services/is-logged-in.service';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[LoginGuard]},
  {path:'home', component: HomeComponent, canActivate:[LoginGuard]},
  {path:'information_at_your_tips', component: InformationComponent, canActivate:[LoginGuard]},
  {path:'code_of_values', component: CodeOfValuesComponent, canActivate:[LoginGuard]},
  {path:'policies_walkthrough', component: PoliciesWalkthroughComponent, canActivate:[LoginGuard]},
  {path:'checklist', component: ChecklistComponent, canActivate:[LoginGuard]},
  {path:'mandatory_trainings', component: MandatoryTrainingsComponent, canActivate:[LoginGuard]},
  {path: 'login', component: LoginComponent, resolve:[IsLoggedIn]},
  {path: 'logout', component: LogoutComponent},

  // {path:'home', component: HomeComponent},
  // {path:'information_at_your_tips', component: InformationComponent},
  // {path:'code_of_values', component: CodeOfValuesComponent},
  // {path:'policies_walkthrough', component: PoliciesWalkthroughComponent},
  // {path:'checklist', component: ChecklistComponent},
  // {path:'mandatory_trainings', component: MandatoryTrainingsComponent},
  // {path:'login', component: LoginComponent},
  // {path:'', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

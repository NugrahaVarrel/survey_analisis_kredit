import { Routes } from '@angular/router';
import { FormSurveyComponent } from './pages/form-survey/form-survey.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveyDetailComponent } from './pages/survey-detail/survey-detail.component';
import { FormCrediturComponent } from './pages/form-creditur/form-creditur.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'form-survey/:id',
    component: FormSurveyComponent,
  },
  {
    path: 'form-creditur',
    component: FormCrediturComponent
  },
  {
    path: 'survey-detail/:id',
    component: SurveyDetailComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';
import { FormSurveyComponent } from './pages/form-survey/form-survey.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveyDetailComponent } from './pages/survey-detail/survey-detail.component';
import { FormCrediturComponent } from './pages/form-creditur/form-creditur.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import { AuthGuard } from './shared/service/auth/auth-guard.guard';
import { GuestGuard } from './shared/service/auth/guest-guard.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestGuard],
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form-survey/:id',
    component: FormSurveyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form-creditur',
    component: FormCrediturComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'survey-detail/:id',
    component: SurveyDetailComponent,
    canActivate: [AuthGuard],
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

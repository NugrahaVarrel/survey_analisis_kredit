import { Routes } from '@angular/router';
import { FormSurveyComponent } from './pages/form-survey/form-survey.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveyDetailComponent } from './pages/survey-detail/survey-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'form-survey/:id',
    component: FormSurveyComponent,
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

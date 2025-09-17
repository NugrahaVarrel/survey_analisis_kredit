import { Component } from '@angular/core';
import { TableComponent } from '../../shared/component/table/table.component';
import { dummyCrediturs, dummySurveys, dummyCreditScores } from '../../shared/data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  surveyDataObject = {
    tableName: 'Survey Data',
    headers: Object.keys(dummySurveys[0]),
    data: dummySurveys,
    action: {
      name: 'Detail',
      route: 'survey-detail'
    }
  };

  crediturDataObject = {
    tableName: 'Creditur Data',
    headers: Object.keys(dummyCrediturs[0]),
    data: dummyCrediturs,
    action: {
      name: 'Survey',
      route: 'form-survey'
    }
  };

  creditScoreDataObject = {
    tableName: 'Credit Score Data',
    headers: Object.keys(dummyCreditScores[0]),
    data: dummyCreditScores,
  };
}

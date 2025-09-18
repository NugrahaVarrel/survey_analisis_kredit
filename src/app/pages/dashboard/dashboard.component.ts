import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/component/table/table.component';
import { SurveyService } from '../../shared/service/survey-service/survey-service.service';
import { CrediturService } from '../../shared/service/creditur-service/creditur-service.service';
import { CreditScoreService } from '../../shared/service/credit-score-service/credit-score-service.service';
import { TableMapping } from '../../shared/interface/table_mapping';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { CardComponent } from '../../shared/component/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, HeaderComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  surveyDataObject: TableMapping = {
    tableName: 'Survey Data',
    headers: [],
    data: [],
    action: {
      name: 'Detail',
      route: 'survey-detail',
    },
  };

  crediturDataObject: TableMapping = {
    tableName: 'Creditur Data',
    headers: [],
    data: [],
    action: {
      name: 'Survey',
      route: 'form-survey',
    },
  };

  creditScoreDataObject: TableMapping = {
    tableName: 'Credit Score Data',
    data: [],
    headers: [],
  };

  constructor(
    private surveyService: SurveyService,
    private crediturService: CrediturService,
    private creditScoreService: CreditScoreService
  ) {}

  ngOnInit(): void {
    this.loadInitData();
  }

  loadInitData() {
    this.surveyService.getAllSurvey().subscribe({
      next: (survey) => {
        this.surveyDataObject.data = survey;
        if (this.surveyDataObject.data?.length != 0) {
          this.surveyDataObject.headers = Object.keys(
            this.surveyDataObject.data?.[0]
          );
        }
      },
      error: (err) => {
        console.error('Error loading creditur:', err);
      },
    });

    this.crediturService.getAllCreditur().subscribe({
      next: (crediturs) => {
        this.crediturDataObject.data = crediturs;
        if (this.crediturDataObject.data?.length != 0) {
          this.crediturDataObject.headers = Object.keys(
            this.crediturDataObject.data?.[0]
          );
        }
      },
      error: (err) => {
        console.error('Error loading creditur:', err);
      },
    });

    this.creditScoreDataObject.data =
      this.creditScoreService.getAllCreditScore();
    this.creditScoreDataObject.headers = Object.keys(
      this.creditScoreDataObject.data[0]
    );
  }
}

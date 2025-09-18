import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { Creditur } from '../../shared/interface/creditur';
import { CardComponent } from '../../shared/component/card/card.component';
import { CrediturService } from '../../shared/service/creditur-service/creditur-service.service';
import { Survey } from '../../shared/interface/survey';
import { SurveyService } from '../../shared/service/survey-service/survey-service.service';
import { CreditScore } from '../../shared/interface/credit_score';
import { CreditScoreService } from '../../shared/service/credit-score-service/credit-score-service.service';
import { Status } from '../../shared/interface/status';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelComponent } from '../../shared/component/label/label.component';

@Component({
  selector: 'app-survey-detail',
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    CommonModule,
    FormsModule,
    LabelComponent,
  ],
  templateUrl: './survey-detail.component.html',
  styleUrl: './survey-detail.component.scss',
})
export class SurveyDetailComponent implements OnInit {
  creditur: Creditur | undefined;
  survey: Survey | undefined;
  creditScore: CreditScore | undefined;
  isUpdating = false;

  surveyId: number = 0;
  creditScoreId: number = 0;
  Status = Status;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crediturService: CrediturService,
    private surveyService: SurveyService,
    private creditScoreService: CreditScoreService
  ) {
    this.surveyId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    return this.surveyService.getSurveyById(this.surveyId).subscribe({
      next: (survey) => {
        this.survey = survey;
        this.getCrediturData(survey.id_creditur);
        this.getCreditScoreData(survey.id);
      },
      error: (err) => {
        console.error('Error loading survey:', err);
      },
    });
  }

  getCrediturData(id: number) {
    return this.crediturService.getCrediturById(id).subscribe({
      next: (creditur) => {
        this.creditur = {
          id: Number(creditur.id),
          name: creditur.name,
          age: creditur.age,
          address: creditur.address,
          occupation: creditur.occupation,
          salary: Number(creditur.salary),
          loan: Number(creditur.loan),
          collateral: creditur.collateral,
          isSurveyDone: creditur.isSurveyDone,
        };
      },
      error: (err) => {
        console.error('Error loading creditur:', err);
      },
    });
  }

  getCreditScoreData(id: number) {
    return this.creditScoreService.getCreditScoreBySurveyId(id).subscribe({
      next: (creditScore) => {
        this.creditScore = {
          id: Number(creditScore[0].id),
          name: creditScore[0].name,
          survey_id: Number(creditScore[0].survey_id),
          credit_score: Number(creditScore[0].credit_score),
          status: creditScore[0].status as Status,
          isStatusChanged: creditScore[0].isStatusChanged,
        };
        this.creditScoreId = this.creditScore.id;
      },
      error: (err) => {
        console.error('Error loading creditScore:', err);
      },
    });
  }

  getStatusType(
    status: Status | undefined
  ): 'primary' | 'success' | 'warning' | 'danger' | 'info' {
    switch (status) {
      case Status.APPROVED:
        return 'success';
      case Status.PENDING:
        return 'warning';
      case Status.REJECTED:
        return 'danger';
      default:
        return 'primary';
    }
  }

  updateCreditScoreStatus(status: Status) {
    if (this.isUpdating) return;

    this.isUpdating = true;
    this.creditScoreService
      .updateCreditScoreStatus(this.creditScore?.id || 0, status)
      .subscribe({
        next: () => {
          this.loadData();
          this.isUpdating = false;
        },
        error: (err) => {
          console.error(err);
          this.isUpdating = false;
        },
      });
  }
}

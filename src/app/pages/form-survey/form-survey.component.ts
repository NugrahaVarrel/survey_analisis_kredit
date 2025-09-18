import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Condition } from '../../shared/interface/condition';
import { ActivatedRoute, Router } from '@angular/router';
import { Creditur } from '../../shared/interface/creditur';
import { CrediturService } from '../../shared/service/creditur-service/creditur-service.service';
import { SurveyService } from '../../shared/service/survey-service/survey-service.service';
import { Survey } from '../../shared/interface/survey';
import { CreditScoreService } from '../../shared/service/credit-score-service/credit-score-service.service';
import { CreditScore } from '../../shared/interface/credit_score';
import { HeaderComponent } from '../../shared/component/header/header.component';

@Component({
  selector: 'app-form-survey',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './form-survey.component.html',
  styleUrl: './form-survey.component.scss',
})
export class FormSurveyComponent implements OnInit {
  form: FormGroup;

  id: number = 0;

  creditur: Creditur | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crediturService: CrediturService,
    private surveyService: SurveyService,
    private creditScoreService: CreditScoreService
  ) {
    this.id = route.snapshot.params['id'];

    this.form = new FormGroup({
      occupation: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      collateral_condition: new FormControl(Condition.GOOD, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.getCrediturData(this.id);
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

  onSubmit() {
    this.surveyService.generateId().subscribe({
      next: (surveyId) => {
        const survey: Survey = {
          id: surveyId,
          id_creditur: Number(this.id),
          val_occupation: this.form.value.occupation === 'true',
          val_address: this.form.value.address === 'true',
          collateral_condition: this.form.value.collateral_condition,
        };

        this.surveyService.addSurvey(survey).subscribe({
          next: () => {},
          error: (err) => {
            console.error('Error adding survey:', err);
          },
        });

        this.crediturService.updateCrediturSurveyDone(this.id);
        if (this.creditur) {
          const creditScoreAndStatus =
            this.creditScoreService.countCreditScores(
              survey.collateral_condition,
              this.creditur.loan,
              this.creditur.salary
            );

          this.creditScoreService.generateId().subscribe({
            next: (creditScoreId) => {
              const creditScore: CreditScore = {
                id: creditScoreId,
                survey_id: surveyId,
                name: this.creditur?.name || '',
                credit_score: creditScoreAndStatus.score,
                status: creditScoreAndStatus.status,
                isStatusChanged: false,
              };

              this.creditScoreService.addCreditScore(creditScore).subscribe({
                next: () => {
                  this.router.navigate(['']);
                },
                error: (err) => {
                  console.error('Error adding credit score:', err);
                },
              });
            },
          });
        }
      },
    });
  }
}

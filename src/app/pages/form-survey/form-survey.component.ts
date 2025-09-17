import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Condition } from '../../shared/interface/condition';
import { ActivatedRoute, Router } from '@angular/router';
import { Creditur } from '../../shared/interface/creditur';
import { CrediturService } from '../../shared/service/creditur-service/creditur-service.service';
import { SurveyService } from '../../shared/service/survey-service/survey-service.service';
import { Survey } from '../../shared/interface/survey';

@Component({
  selector: 'app-form-survey',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-survey.component.html',
  styleUrl: './form-survey.component.scss',
})
export class FormSurveyComponent implements OnInit{
  form: FormGroup;

  id: number = 0;

  creditur: Creditur | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private crediturService: CrediturService, private surveyService: SurveyService) {

    this.id = route.snapshot.params['id'];

    this.form = new FormGroup({
      occupation: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      collateral_condition: new FormControl(Condition.GOOD, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.creditur = this.crediturService.getCrediturById(this.id);
  }

  onSubmit() {
    const surveyId = this.surveyService.generateId();
    const survey: Survey = {
      id: surveyId,
      id_creditur: Number(this.id),
      val_occupation: this.form.value.occupation,
      val_address: this.form.value.address,
      collateral_condition: this.form.value.collateral_condition
    };

    this.surveyService.addSurvey(survey);
    this.crediturService.updateCrediturSurveyDone(this.id);
    this.router.navigate(['']);
  }
}

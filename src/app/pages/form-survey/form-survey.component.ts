import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Condition } from '../../shared/interface/condition';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-survey',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-survey.component.html',
  styleUrl: './form-survey.component.scss',
})
export class FormSurveyComponent {
  form: FormGroup;

  id: number = 0;

  constructor(private route: ActivatedRoute) {

    this.id = route.snapshot.params['id'];

    this.form = new FormGroup({
      occupation: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      collateral_condition: new FormControl(Condition.GOOD, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

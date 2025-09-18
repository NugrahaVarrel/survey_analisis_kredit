import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Creditur } from '../../shared/interface/creditur';
import { CrediturService } from '../../shared/service/creditur-service/creditur-service.service';

@Component({
  selector: 'app-form-creditur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-creditur.component.html',
  styleUrl: './form-creditur.component.scss',
})
export class FormCrediturComponent {
  form: FormGroup;

  constructor(
    private crediturService: CrediturService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.min(18)]),
      address: new FormControl('', [Validators.required]),
      occupation: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [Validators.required, Validators.min(0)]),
      loan: new FormControl(null, [Validators.required, Validators.min(0)]),
      collateral: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const newCreditur: Creditur = {
        id: this.crediturService.generateId(),
        ...this.form.value,
        surveyed: false, // default: belum disurvey
      };

      this.crediturService.addCreditur(newCreditur);
      alert('✅ Creditur berhasil ditambahkan!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('❌ Form belum valid!');
    }
  }
}

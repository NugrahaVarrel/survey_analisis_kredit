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
import { HeaderComponent } from '../../shared/component/header/header.component';

@Component({
  selector: 'app-form-creditur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
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
      age: new FormControl(null, [Validators.required, Validators.min(21)]),
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
        isSurveyDone: false,
      };

      this.crediturService.addCreditur(newCreditur).subscribe({
        next: () => {
          alert('✅ Creditur berhasil ditambahkan!');
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error adding creditur:', err);
        },
      });
    } else {
      alert('❌ Form belum valid!');
    }
  }
}

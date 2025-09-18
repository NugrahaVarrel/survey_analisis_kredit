import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/component/header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { password, confirmPassword } = this.registerForm.value;
      if (password !== confirmPassword) {
        alert('Password dan Konfirmasi Password tidak sama!');
        return;
      }
      console.log('Form Register:', this.registerForm.value);
      alert(`Registrasi berhasil dengan email: ${this.registerForm.value.email}`);
    } else {
      alert('Form tidak valid, silakan isi dengan benar.');
    }
  }
}

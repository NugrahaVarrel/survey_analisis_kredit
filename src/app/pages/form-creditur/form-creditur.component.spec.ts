import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrediturComponent } from './form-creditur.component';

describe('FormCrediturComponent', () => {
  let component: FormCrediturComponent;
  let fixture: ComponentFixture<FormCrediturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCrediturComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCrediturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

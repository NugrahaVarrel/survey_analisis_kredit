import { TestBed } from '@angular/core/testing';

import { CrediturService } from './creditur-service.service';

describe('CrediturServiceService', () => {
  let service: CrediturService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrediturService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

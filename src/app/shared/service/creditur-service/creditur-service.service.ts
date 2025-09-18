import { Injectable } from '@angular/core';
import { Creditur } from '../../interface/creditur';
import { ApiService } from '../api/api-service.service';
import { map, Observable } from 'rxjs';
// import { dummyCrediturs } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class CrediturService {
  crediturData: Creditur[] = [];
  crediturUrl: string = 'creditur';
  constructor(private apiService: ApiService) {
    // this.crediturData = dummyCrediturs;
  }

  getAllCreditur(): Observable<Creditur[]> {
    return this.apiService.get(this.crediturUrl).pipe(
      map((data: any[]) =>
        data.map((creditur: any) => ({
          id: Number(creditur.id),
          name: creditur.name,
          age: creditur.age,
          address: creditur.address,
          occupation: creditur.occupation,
          salary: Number(creditur.salary),
          loan: Number(creditur.loan),
          collateral: creditur.collateral,
          isSurveyDone: creditur.isSurveyDone,
        }))
      )
    );
  }

  addCreditur(creditur: Creditur) {
    return this.apiService.post(this.crediturUrl, creditur);
  }

  getCrediturById(id: number) {
    return this.apiService.getById(this.crediturUrl, id);
  }
  
  generateId() {
    return this.crediturData.length + 1;
  }

  updateCrediturSurveyDone(id: number): void {
    this.getCrediturById(id).subscribe({
      next: (creditur) => {
        if (creditur) {
          creditur.isSurveyDone = true;

          this.apiService
            .put(this.crediturUrl, creditur.id, creditur)
            .subscribe({
              next: (updated) => {
                console.log('Creditur updated successfully:', updated);
              },
              error: (err) => {
                console.error('Failed to update creditur:', err);
              },
            });
        }
      },
      error: (err) => {
        console.error('Failed to fetch creditur:', err);
      },
    });
  }
}

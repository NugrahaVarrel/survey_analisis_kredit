import { Injectable } from '@angular/core';
import { Creditur } from '../../interface/creditur';
import { dummyCrediturs } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class CrediturService {
  crediturData: Creditur[];
  constructor() {
    this.crediturData = dummyCrediturs;
  }

  getAllCreditur() {
    return this.crediturData.map((creditur) => {
      return {
        id: creditur.id,
        name: creditur.name,
        age: creditur.age,
        address: creditur.address,
        occupation: creditur.occupation,
        salary: creditur.salary,
        loan: creditur.loan,
        collateral: creditur.collateral,
      };
    });
  }

  addCreditur(creditur: Creditur) {
    this.crediturData.push(creditur);
  }

  getCrediturById(id: number) {
    return this.crediturData.find((creditur) => creditur.id === id);
  }

  isSurveyDone(id: number) {
    return this.crediturData.find((creditur) => creditur.id === id)
      ?.isSurveyDone;
  }
}

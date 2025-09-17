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
    return this.crediturData;
  }

  addCreditur(creditur: Creditur) {
    this.crediturData.push(creditur);
  }

  getCrediturById(id: number) {
    return this.crediturData.find((creditur) => creditur.id === id);
  }
}

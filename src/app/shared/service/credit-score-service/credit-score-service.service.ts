import { Injectable } from '@angular/core';
import { CreditScore } from '../../interface/credit_score';
import { dummyCreditScores } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class CreditScoreService {
  creditScoreData: CreditScore[];

  constructor() {
    this.creditScoreData = dummyCreditScores
   }

  getAllCreditScore() {
    return this.creditScoreData;
  }

  addCreditScore(creditScore: CreditScore) {
    this.creditScoreData.push(creditScore);
  }

  getCreditScoreById(id: number) {
    return this.creditScoreData.find(creditScore => creditScore.id === id);
  }
}

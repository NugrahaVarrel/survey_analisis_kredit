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

  countCreditScores(collateral_condition: string, loan: number, salary: number) {
    let score = 0;

    // Kondisi barang
    if (collateral_condition.toLowerCase() === 'good') {
      score += 30;
    } else {
      score += 10;
    }

    // Penghasilan
    if (salary >= 10000000) {
      score += 40;
    } else if (salary >= 5000000) {
      score += 30;
    } else {
      score += 15;
    }

    // Loan dibanding salary
    if (loan <= salary * 0.5) {
      score += 30;
    } else if (loan <= salary) {
      score += 20;
    } else {
      score += 10;
    }

    // Tentukan status berdasarkan score
    let status = 'Pending';
    if (score >= 80) {
      status = 'Approved';
    } else if (score < 50) {
      status = 'Rejected';
    }

    return { score, status };
  }
}

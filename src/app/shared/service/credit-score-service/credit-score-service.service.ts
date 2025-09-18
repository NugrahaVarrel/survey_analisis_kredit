import { Injectable } from '@angular/core';
import { CreditScore } from '../../interface/credit_score';
import { dummyCreditScores } from '../../data';
import { Status } from '../../interface/status';

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
    return this.creditScoreData.find(creditScore => creditScore.id == id);
  }

  generateId() {
    return this.creditScoreData.length + 1;
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
    let status = Status.PENDING;
    if (score >= 80) {
      status = Status.APPROVED;
    } else if (score < 50) {
      status = Status.REJECTED;
    }

    return { score, status };
  }
}

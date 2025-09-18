import { Injectable } from '@angular/core';
import { CreditScore } from '../../interface/credit_score';
import { dummyCreditScores } from '../../data';
import { Status } from '../../interface/status';
import { ApiService } from '../api/api-service.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditScoreService {
  creditScoreData: CreditScore[] = [];

  constructor(private apiService: ApiService) {}

  getAllCreditScore() {
    return this.apiService.getCreditScore().pipe(map((data) => {
      return data.map((creditScore: any) => ({
        id: Number(creditScore.id),
        name: creditScore.name,
        survey_id: Number(creditScore.survey_id),
        credit_score: Number(creditScore.credit_score),
        status: creditScore.status as Status,
        isStatusChanged: creditScore.isStatusChanged
      }));
    }));
  }

  addCreditScore(creditScore: CreditScore) {
    return this.apiService.postCreditScore(creditScore);
  }

  getCreditScoreById(id: number) {
    return this.apiService.getCreditScoreById(id);
  }

  generateId() {
    return this.creditScoreData.length + 1;
  }

  countCreditScores(
    collateral_condition: string,
    loan: number,
    salary: number
  ) {
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

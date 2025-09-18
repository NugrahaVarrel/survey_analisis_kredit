import { Injectable } from '@angular/core';
import { Survey } from '../../interface/survey';
import { dummySurveys } from '../../data';
import { map, Observable } from 'rxjs';
import { ApiService } from '../api/api-service.service';
import { Condition } from '../../interface/condition';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  surveyData: Survey[] = [];
  surveyUrl: string = 'survey';

  constructor(private apiService: ApiService) {}

  getAllSurvey(): Observable<any[]> {
    return this.apiService.get(this.surveyUrl).pipe(
      map((data: any[]) =>
        data.map((survey: any) => ({
          id: survey.id,
          id_creditur: survey.id_creditur,
          val_occupation: survey.val_occupation ? 'Sesuai' : 'Tidak Sesuai',
          val_address: survey.val_address ? 'Sesuai' : 'Tidak Sesuai',
          collateral_condition: survey.collateral_condition as Condition,
        }))
      )
    );
  }

  getSurveyById(id: number) {
    return this.apiService.getById(this.surveyUrl, id);
  }

  generateId(): Observable<number> {
    return this.apiService
      .getLength(this.surveyUrl)
      .pipe(map((data) => data.length + 1));
  }

  getSurveyByCrediturId(id: number) {
    return this.surveyData.filter((survey) => survey.id_creditur == id);
  }

  addSurvey(survey: Survey) {
    return this.apiService.post(this.surveyUrl, survey);
  }
}

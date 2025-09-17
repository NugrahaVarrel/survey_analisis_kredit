import { Injectable } from '@angular/core';
import { Survey } from '../../interface/survey';
import { dummySurveys } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveyData: Survey[];

  constructor() { 
    this.surveyData = dummySurveys
  }

  getAllSurvey() {
    return (this.surveyData.map(survey => {
      return {
        id: survey.id,
        id_creditur: survey.id_creditur,
        val_occupation: survey.val_occupation ? 'Sesuai' : 'Tidak Sesuai',
        val_address: survey.val_address ? 'Sesuai' : 'Tidak Sesuai',
        collateral_condition: survey.collateral_condition,
      };
    }));
  }

  getSurveyById(id: number) {
    return this.surveyData.find(survey => survey.id === id);
  }

  generateId() {
    return this.surveyData.length + 1;
  }

  getSurveyByCrediturId(id: number) {
    return this.surveyData.filter(survey => survey.id_creditur === id);
  }

  addSurvey(survey: Survey) {
    this.surveyData.push(survey);
  }
}

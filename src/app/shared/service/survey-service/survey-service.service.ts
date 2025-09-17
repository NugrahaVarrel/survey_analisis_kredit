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
    return this.surveyData;
  }

  getSurveyById(id: number) {
    return this.surveyData.find(survey => survey.id === id);
  }

  getSurveyByCrediturId(id: number) {
    return this.surveyData.filter(survey => survey.id_creditur === id);
  }

  addSurvey(survey: Survey) {
    this.surveyData.push(survey);
  }
}

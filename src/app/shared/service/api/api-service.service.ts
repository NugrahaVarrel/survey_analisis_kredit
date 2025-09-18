import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditur } from '../../interface/creditur';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private mainApi: string = 'https://68cb7b86716562cf507399f8.mockapi.io/api/'

  constructor(private http: HttpClient) { 

  }

  get(url: string): Observable<any> {
    return this.http.get(this.mainApi + url)
  }

  getById(url: string, id: number): Observable<any> {
    return this.http.get(this.mainApi + url + '/' + id)
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this.mainApi + url, data)
  }

  put(url: string, id: number, data: any): Observable<any> {
    return this.http.put(this.mainApi + url + '/' + id, data)
  }
}

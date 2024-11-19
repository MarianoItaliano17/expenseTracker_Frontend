import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "https://experienced-florella-mariano-261e7fa3.koyeb.app/";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats():Observable<any>{
    return this.http.get(BASIC_URL + "api/stats")
  }

  getChart():Observable<any>{
    return this.http.get(BASIC_URL + "api/stats/chart")
  }
}

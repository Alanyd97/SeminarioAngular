import { HttpHeaders,HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Bet } from 'src/app/models/bet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const URL:string = "https://63343d0790a73d0fedea5500.mockapi.io/User";

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http: HttpClient) { }

  public getPostBet(b:Bet): Observable<Bet>{
    return this.http.post<Bet>(URL, b, httpOptions);
  }


}

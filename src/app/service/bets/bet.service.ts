import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmptyError, Observable, throwError } from 'rxjs';
import { Bet } from 'src/app/models/bet';
import { User } from 'src/app/models/user';
import { UserService } from '../user/user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const URL:string = "https://63343d0790a73d0fedea5500.mockapi.io/Bet";

@Injectable({
  providedIn: 'root'
})
export class BetService {
  lastId:number=0;
  constructor(private http: HttpClient, private userService:UserService) { }

  public postBet(b:Bet, user:User): Observable<Bet>{
    user.moneyAvailable -=b.moneyBet;
    this.userService.updateUserToSuscribers(user)
    b.id=""+this.lastId;
    this.lastId++;
    console.log("bet on service", b);
    return this.http.put<Bet>(URL+"/"+b.id, b, httpOptions);
  }

  public userBetAttempt(betMoney:number, user:User): string{
    if(betMoney>user.moneyAvailable){
      return "Saldo insuficiente"
    }
    return ""
    /**
 */
  }




}

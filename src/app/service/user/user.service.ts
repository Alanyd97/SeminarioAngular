import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';




const URL:string = "https://63343d0790a73d0fedea5500.mockapi.io/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private user : User = new User;
  _motoListBehavior: BehaviorSubject<User> = new BehaviorSubject(this.user);
  
  constructor(private http: HttpClient) { }


  public getUser(id:string): Observable<User>{
    return this.http.get<User>(URL+"/"+id);
  }


}

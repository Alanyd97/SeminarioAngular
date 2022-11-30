import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IMoto, MotoBlog } from 'src/app/models/moto';

const URL:string = "https://63343d0790a73d0fedea5500.mockapi.io/Motos";
@Injectable({
  providedIn: 'root'
})


export class MotoService {

  private motoList : IMoto[] = [];
  _motoListBehavior: BehaviorSubject<IMoto[]> = new BehaviorSubject(this.motoList);
  constructor(private http: HttpClient) { }

  public getAll(): Observable<IMoto[]>{
    return this.http.get<IMoto[]>(URL);
  }

  public getMoto(id:string): Observable<MotoBlog>{
    return this.http.get<MotoBlog>(URL+"/"+id);
  }
 

}

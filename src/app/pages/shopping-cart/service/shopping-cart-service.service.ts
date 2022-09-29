import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Beer, IBeer } from 'src/app/components/list/beer';

const URL:string = "https://63343d0790a73d0fedea5500.mockapi.io/beers ";
@Injectable({
  providedIn: 'root'
})


export class ShoppingCartServiceService {


  private cartList : Beer[] = [];
  _cartListBehavior: BehaviorSubject<Beer[]> = new BehaviorSubject(this.cartList);
  constructor(private http: HttpClient) { }

  addToCart(beer: Beer) {
    let item: Beer | undefined;
    item = this.cartList.find((v1) => v1.name == beer.name);
    if(!item) {
      this.cartList.push({ ... beer});
    } else {
      item.quantity += beer.quantity;
    }
    this._cartListBehavior.next(this.cartList)
  }

  getCart():Beer[]{
    return this.cartList;
  }

  public getAll(): Observable<Beer[]>{
    console.log("entre");
    
    return this.http.get<Beer[]>(URL)
    .pipe(
      tap((beers) => beers.forEach(b=> b.quantity = 0))
    );
  }
 

}

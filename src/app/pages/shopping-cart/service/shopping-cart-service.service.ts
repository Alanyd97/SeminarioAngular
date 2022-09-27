import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from 'src/app/components/list/beer';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  private cartList : Beer[] = [];
  _cartListBehavior: BehaviorSubject<Beer[]> = new BehaviorSubject(this.cartList);
  constructor() { }

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
 

}

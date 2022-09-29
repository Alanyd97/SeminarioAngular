import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Beer } from 'src/app/components/list/beer';
import { ShoppingCartServiceService } from './service/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartList$ : Observable<Beer[]>;
  constructor(private beerShoppingService: ShoppingCartServiceService) {
      //this.cartList$ = beerShoppingService._cartListBehavior.asObservable();
      this.cartList$ = beerShoppingService.getAll();
   }

  ngOnInit(): void {
  }

  getCart(){

  }

}

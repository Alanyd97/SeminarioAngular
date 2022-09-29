import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from 'src/app/pages/shopping-cart/service/shopping-cart-service.service';
import { Beer } from './beer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  limit: string;
  beerList: Beer[] = []

  constructor(private beerShoppingService: ShoppingCartServiceService) {}

  ngOnInit(): void {
    this.beerShoppingService.getAll().subscribe(
      response => this.beerList = response
    );
  }
  setLimitReached(s:string){
    this.limit=s;
  }

  addToCart(beer:Beer){
    this.beerShoppingService.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }
}

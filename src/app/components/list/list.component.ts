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
  beerList: Beer[] = [
    {
      code:"123",
      name: "Amarga",
      type: "IPA",
      price: 200,
      stock: 2,
      image: "https://www.craftmoments.com.ar/wp-content/uploads/2017/02/chanchingo_ipa.png",
      cleareance: false,
      quantity:0
    },
    {
      code:"12223",
      name: "Amarga",
      type: "Barley",
      price: 200,
      stock: 0,
      image: "https://www.craftmoments.com.ar/wp-content/uploads/2017/02/chanchingo_ipa.png",
      cleareance: true,
      quantity:0
    }
  ]

  constructor(private beerShoppingService: ShoppingCartServiceService) {}

  ngOnInit(): void {
  }
  setLimitReached(s:string){
    this.limit=s;
  }

  addToCart(beer:Beer){
    this.beerShoppingService.addToCart(beer);
  }
}

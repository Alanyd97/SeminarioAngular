import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  beerList: Beer[] = [
    {
      code:"123",
      name: "Amarga",
      type: "IPA",
      price: 200,
      stock: 24,
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

  constructor() {
   }

  ngOnInit(): void {
  }

  plusCuantity(beer: Beer): void{
    if (beer.quantity < beer.stock)
      beer.quantity++;
  }
  minusCuantity(beer: Beer): void{
    if (beer.quantity > 0)
      beer.quantity--;
  }

}

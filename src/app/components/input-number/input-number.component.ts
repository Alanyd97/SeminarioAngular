import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../list/beer';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  quantity:number;

  @Input()
  max:number;

  @Output()
  quantityChange:EventEmitter<number> = new EventEmitter<number>;

  @Output()
  limit:EventEmitter<string> = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }
  
  plusCuantity(): void{
    if (this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.limit.emit("limit reached")
    }
  }
  minusCuantity(): void{
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }else{
      this.limit.emit("")
    }
    
  }

}

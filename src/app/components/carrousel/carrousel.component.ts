import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { IMoto } from 'src/app/models/moto';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  
  @Input()
  items : IMoto[] =[];

  itemActual:IMoto;
 

  constructor() {
    console.log("constr", this.items);
    
   }

   ngOnInit(): void {
    console.log("oninti",this.items);
  }
  ngOnChanges():void{
    this.itemActual=this.items[0];
  }

  setItemActual(s:number){
    console.log("pase");
    if (this.itemActual)
      this.itemActual = this.items[s];
  }


}

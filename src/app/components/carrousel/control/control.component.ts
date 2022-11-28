import { Component,EventEmitter, Input,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input()
  text:string;
  @Input()
  type:string;
  @Input()
  items:number;
  @Input()
  modo:boolean;  //false= prev true = next
  
  @Output()
  position:EventEmitter<number> = new EventEmitter<number>;

  posicionActual:number = 0;
  constructor() {
    this.position.emit(this.posicionActual)
   }

  ngOnInit(): void {
  }
  previus(){
    if(this.posicionActual == 0 || this.posicionActual < 0){
      this.posicionActual = this.items-1;
    }else{
      this.posicionActual--;
    }
    this.position.emit(this.posicionActual);
  }
  next(){
    if(this.posicionActual == this.items-1 || this.posicionActual > this.items-1){
      this.posicionActual = 0;
    }else{
      this.posicionActual++;
    }
    this.position.emit(this.posicionActual);
  }

  action(){
    if (this.modo){
      this.previus()
    }else{
      this.next()
    }
  }

}

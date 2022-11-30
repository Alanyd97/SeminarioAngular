import { Component, OnInit, Input } from '@angular/core';
import { IMoto } from 'src/app/models/moto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  moto:IMoto;

  constructor() { }

  ngOnInit(): void {
  }

}

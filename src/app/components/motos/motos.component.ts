import { Component, OnInit,Input } from '@angular/core';
import { IMoto } from 'src/app/models/moto';
import { MotoService } from 'src/app/service/moto-service.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {
  @Input()
  motos:IMoto[] = [];
  constructor() { 
  }

  ngOnInit(): void {
  }

}

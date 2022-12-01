import { Component, OnInit } from '@angular/core';
import { IMoto } from 'src/app/models/moto';
import { MotoService } from 'src/app/service/moto/moto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  motos:IMoto[] = [];
  winners:IMoto[] = [];
  constructor(private motoService:MotoService) { 
    this.motoService.getAll().subscribe(a=> 
      {
        this.motos = a;
        this.winners = this.getFirstsPlaces(a);
        console.log("winners", this.winners);
      }
      );
  }
  ngOnInit(): void {
  }

  getFirstsPlaces(motos:IMoto[]): IMoto[]{
    const firstsPlaces =motos.filter(m =>  m.lastRacePlace != "");
    return firstsPlaces;
  }
}

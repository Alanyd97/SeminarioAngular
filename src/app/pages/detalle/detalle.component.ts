import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MotoBlog } from 'src/app/models/moto';
import { MotoService } from 'src/app/service/moto/moto-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: string;
  motoDetail:MotoBlog = new MotoBlog;
  constructor(private motoService:MotoService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(a=> this.id = a["id"]);
    this.motoService.getMoto(this.id).subscribe(a =>this.motoDetail = a);
  }

  ngOnInit(): void {
  }

}

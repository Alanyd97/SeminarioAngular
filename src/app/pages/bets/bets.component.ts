import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMoto } from 'src/app/models/moto';
import { User } from 'src/app/models/user';
import { MotoService } from 'src/app/service/moto/moto-service.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {
  competidores: IMoto[]=[];
  user: User = new User;
  constructor(private motoService:MotoService, private userService:UserService, private activatedRoute:ActivatedRoute) { 
    this.motoService.getAll().subscribe(a=>this.competidores = a);
    this.userService.getUser("1").subscribe(b => this.user = b);
  }

  ngOnInit(): void {
  }

}

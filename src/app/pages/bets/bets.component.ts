import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif } from 'rxjs';
import { Bet } from 'src/app/models/bet';
import { IMoto } from 'src/app/models/moto';
import { User } from 'src/app/models/user';
import { BetService } from 'src/app/service/bets/bet.service';
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
  betList:Bet[] = [];
  constructor(private betService:BetService,private motoService:MotoService, private userService:UserService, private activatedRoute:ActivatedRoute) { 
    this.motoService.getAll().subscribe(a=>this.competidores = a);
    this.userService.getUser("1").subscribe(b => this.user = b);
  }

  ngOnInit(): void {
  }
  updateUserMoney(v:Event, id:string){
    let s:number= +(v.target as HTMLInputElement).value
    let fail = this.betService.userBetAttempt(s, this.user)
    if(fail.length>0){
      alert(fail)
      return;
    }
    this.betList.forEach(bet => {
      if(bet.motoId == id){
        bet.moneyBet = s;
        return;
      }
    });
    let b = new Bet;
    b.motoId = id;
    b.userId = this.user.id;
    b.moneyBet = s;
    this.betList.push(b);
  }

  apostar( motoId:string, user:User){
    let bet = this.betList.filter(a => a.motoId == motoId)[0];
    if(bet.moneyBet >0){
      this.betService.postBet(bet,user);
    }
  }
}

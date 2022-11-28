import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  
  items : string[] = [
    "https://enduro21.com/images/2022/november-2022/new-enduro-bike-what-do-you-do-first/2023_ktm_300_exc_first-ride_edit_img_6317.jpg",
    "https://enduro21.com/images/2022/november-2022/pro-bike-eero-remes-fe350/eero_remes_bloms_mx_fe350_pro_bike_20221028-139a9618.jpg",
    "https://enduro21.com/images/2022/november-2022/motos-pro-beta-390-rr-4t-racing-cristobal-guerrero/2022_beta_rr_racing_350_cristobal_guerrero0018.jpg"
  ]
  itemActual:string = "https://enduro21.com/images/2022/november-2022/new-enduro-bike-what-do-you-do-first/2023_ktm_300_exc_first-ride_edit_img_6317.jpg"
 

  constructor() { }

  ngOnInit(): void {
  }

  setItemActual(s:number){
    this.itemActual = this.items[s];
  }


}

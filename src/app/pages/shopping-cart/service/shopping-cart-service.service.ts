import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Beer, IBeer } from 'src/app/components/list/beer';

const URL:string = "https://63343d0790a73d0fedea5500.mockapi.io/beers ";
@Injectable({
  providedIn: 'root'
})


export class ShoppingCartServiceService {

  private beerList : Beer[] = [];
  _beerListBehavior: BehaviorSubject<Beer[]> = new BehaviorSubject(this.beerList);
  constructor(private http: HttpClient) { }

  addToCart(beer: Beer) {
    let item: Beer | undefined;
    item = this.beerList.find((v1) => v1.name == beer.name);
    if(!item) {
      this.beerList.push({ ... beer});
    } else {
      item.quantity += beer.quantity;
    }
    this._beerListBehavior.next(this.beerList)
  }

  getCart():Beer[]{
    return this.beerList;
  }

  public getAll(): Observable<Beer[]>{
    return this.http.get<Beer[]>(URL)
    .pipe(
      tap((beers) => beers.forEach(b=> b.quantity = 0))
    );
  }
 

}

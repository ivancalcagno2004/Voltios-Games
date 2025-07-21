import { Injectable } from '@angular/core';
import {Game} from "../interfaces/game";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameCartService {
  private _cartList : Game[] = [];
  cartList : BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);
  totalCount : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _totalCount = 0;
  constructor() { }

  addToCart(game: Game) {
    let item = this._cartList.find((v1) => v1.name === game.name);
    if (!item) {
      this._cartList.push({ ... game});
    }else{
      item.cart += game.cart
    }
    console.log(this.cartList);
    this.cartList.next(this._cartList)
  }

  getTotal() {
    this._totalCount = 0;
    for (let i = 0; i < this._cartList.length; i++) {
      this._totalCount += this._cartList[i].price * this._cartList[i].cart;
    }
    this.totalCount.next(this._totalCount);
  }
}

import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../../interfaces/game";
import {GameCartService} from "../../services/game-cart.service";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-game-cart',
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './game-cart.component.html',
  styleUrl: './game-cart.component.scss'
})
export class GameCartComponent {
  cartList$: Observable<Game[]>;
  totalCount$: Observable<number>;

  constructor(public cart : GameCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.totalCount$ = cart.totalCount.asObservable();
  }

}

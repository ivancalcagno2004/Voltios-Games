import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Game} from "../../interfaces/game";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {InputIntegerComponent} from "./input-integer/input-integer.component";
import {GameCartService} from "../../services/game-cart.service";
import {GameDataService} from "../../services/game-data.service";

@Component({
  selector: 'app-game-carousel',
    standalone: true,
    imports: [
        NgForOf,
        NgbCarousel,
        NgbSlide,
        NgClass,
        NgIf,
        FormsModule,
        InputIntegerComponent,
    ],
  templateUrl: './game-carousel.component.html',
  styleUrl: './game-carousel.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameCarouselComponent {
    ///assets/images/gta-5.jpg

    games: Game[] = [];

    cartList : Game[] = [];
    grupoJuegos: any[][] = [];
    constructor(private cart: GameCartService, private gameDataService : GameDataService) {
        cart.cartList.subscribe((observable) => this.cartList = observable);
        this.gameDataService.getAll().subscribe(games => this.games=games); //API
        //this.games = this.gameDataService.mock(); //MOCK
    }


    ngOnInit() {
        this.grupoJuegos = this.chunkArray(this.games, 4);
    }

    chunkArray(array: any[], size: number): any[][] {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    maxAlcanzado(max : number): void {
        //mensaje de alcanzó el limite
    }

    addToCart(game: Game) {
        this.cart.addToCart(game);
        game.stock -= game.cart;
        game.cart = 0;
    }
    getTotalCount() {
        this.cart.getTotal();
    }
}

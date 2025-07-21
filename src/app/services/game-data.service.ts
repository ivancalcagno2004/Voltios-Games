import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Game} from "../interfaces/game";

const URL = "https://687d2173918b6422433113a0.mockapi.io/api/voltios/Games";

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(URL).pipe(
        tap((games: Game[]) => games
            .forEach(game => game.cart = 0)));
  }

  mock(): Game[]{
    return [
      {
        name: 'PlayStation 5',
        price: 799,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA",
        stock: 2,
        offer: true,
        cart: 0,
      },
      {
        name: 'Xbox Series X',
        price: 749,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
        stock: 10,
        offer: true,
        cart: 0,
      },
      {
        name: 'Nintendo Switch',
        price: 599,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
        stock: 0,
        offer: false,
        cart: 0,
      },
      {
        name: 'Steam Deck',
        price: 699,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
        stock: 0,
        offer: true,
        cart: 0,
      },
      {
        name: 'Gaming PC',
        price: 1299,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
        stock: 10,
        offer: false,
        cart: 0,
      },
      {
        name: 'Gaming PC',
        price: 1299,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
        stock: 10,
        offer: true,
        cart: 0,
      },
    ];
  }
}

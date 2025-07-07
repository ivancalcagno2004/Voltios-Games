import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Carousel} from "primeng/carousel";
import {Tag} from "primeng/tag";
import {NgStyle} from "@angular/common";
import {Game} from "../../interfaces/game";

@Component({
  selector: 'app-game-carousel',
    imports: [
        Button,
        Carousel,
        Tag,
        NgStyle
    ],
  templateUrl: './game-carousel.component.html',
  styleUrl: './game-carousel.component.scss'
})
export class GameCarouselComponent {
    games: Game[] = [
        {
            name: 'PlayStation 5',
            price: 799,
            image: "src/assets/images/gta-5.jpg",
            stock: 10,
            offer: true,
        },
        {
            name: 'Xbox Series X',
            price: 749,
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
            stock: 10,
            offer: true,
        },
        {
            name: 'Nintendo Switch',
            price: 599,
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
            stock: 10,
            offer: true,
        },
        {
            name: 'Steam Deck',
            price: 699,
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
            stock: 10,
            offer: true,
        },
        {
            name: 'Gaming PC',
            price: 1299,
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
            stock: 10,
            offer: true,
        },
        {
            name: 'Gaming PC',
            price: 1299,
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e08aaa4f-1100-4034-ab48-0a0bb0cbf937/d50ig29-830e61e7-ecac-46c3-b207-26e16c61ca62.png/v1/fill/w_761,h_1050/gta_v___caratula__by_my__by_nicolus12_d50ig29-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2UwOGFhYTRmLTExMDAtNDAzNC1hYjQ4LTBhMGJiMGNiZjkzN1wvZDUwaWcyOS04MzBlNjFlNy1lY2FjLTQ2YzMtYjIwNy0yNmUxNmM2MWNhNjIucG5nIiwid2lkdGgiOiI8PTExODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5DTZEwsvoYVRcPPcIV4g4kvhKShM9Kvx90GYZuFYtNA',
            stock: 10,
            offer: true,
        },
    ];
}

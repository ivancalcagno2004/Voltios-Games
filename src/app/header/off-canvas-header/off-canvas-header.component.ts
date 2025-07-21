import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {GameCartComponent} from "../../main-content/game-cart/game-cart.component";

@Component({
  selector: 'app-off-canvas-header',
    imports: [
        GameCartComponent

    ],
  templateUrl: './off-canvas-header.component.html',
  styleUrl: './off-canvas-header.component.scss'
})
export class OffCanvasHeaderComponent{
  title = AppComponent.title;
}

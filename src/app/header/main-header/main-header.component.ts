import { Component } from '@angular/core';
import {Toolbar} from "primeng/toolbar";
import {Button} from "primeng/button";
import {OffCanvasHeaderComponent} from "../off-canvas-header/off-canvas-header.component";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-main-header',
    imports: [
        Toolbar,
        Button,
        OffCanvasHeaderComponent,
    ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  title = AppComponent.title;
}

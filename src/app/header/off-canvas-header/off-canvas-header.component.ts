import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-off-canvas-header',
    imports: [
        RouterLink

    ],
  templateUrl: './off-canvas-header.component.html',
  styleUrl: './off-canvas-header.component.scss'
})
export class OffCanvasHeaderComponent{
  title = AppComponent.title;
}

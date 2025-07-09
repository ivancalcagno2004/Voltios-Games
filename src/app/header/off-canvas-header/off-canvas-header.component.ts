import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-off-canvas-header',
    imports: [

    ],
  templateUrl: './off-canvas-header.component.html',
  styleUrl: './off-canvas-header.component.scss'
})
export class OffCanvasHeaderComponent{
  title = AppComponent.title;
}

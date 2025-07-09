import { Component } from '@angular/core';
import {Toolbar} from "primeng/toolbar";
import {Button} from "primeng/button";
import {OffCanvasHeaderComponent} from "../off-canvas-header/off-canvas-header.component";
import {AppComponent} from "../../app.component";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {InputText} from "primeng/inputtext";

@Component({
  selector: 'app-main-header',
    imports: [
        Toolbar,
        Button,
        OffCanvasHeaderComponent,
        InputGroupModule,
        InputGroupAddonModule,
        InputText,
    ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  title = AppComponent.title;
}

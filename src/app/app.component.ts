import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainHeaderComponent} from "./header/main-header/main-header.component";
import {MainFooterComponent} from "./footer/main-footer/main-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeaderComponent, MainFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public static title = 'Voltios Games';
}

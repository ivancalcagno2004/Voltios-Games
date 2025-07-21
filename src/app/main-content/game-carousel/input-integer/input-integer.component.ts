import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Game} from "../../../interfaces/game";


@Component({
  selector: 'app-input-integer',
    imports: [
        FormsModule
    ],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input() cantidadCart!: number;

  @Input() max!: number;

  @Output()
  cantidadCartChange : EventEmitter<number> = new EventEmitter();

  @Output()
  maxAlcanzado : EventEmitter<number> = new EventEmitter();


  upCart() {
    if (this.cantidadCart < this.max){
      this.cantidadCart++;
      this.cantidadCartChange.emit(this.cantidadCart);
    } else{
      this.maxAlcanzado.emit(this.max);
    }
  }

  downCart() {
    if (this.cantidadCart > 0)
      this.cantidadCart--;
      this.cantidadCartChange.emit(this.cantidadCart);
  }

  changeOnCart(event : any) {
    event.preventDefault();
  }
}

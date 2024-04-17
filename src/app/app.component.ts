import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JAGM-store';
  showCart: boolean = false;
  usuarioAutenticado: boolean = false; // Asegúrate de definir esta propiedad

  constructor() {
    // Aquí podrías colocar la lógica para verificar si el usuario está autenticado
    // Por ahora, lo estableceré en true para simular que el usuario está autenticado
    this.usuarioAutenticado = true;
  }

  toogleCart() {
    this.showCart = !this.showCart;
  }
}

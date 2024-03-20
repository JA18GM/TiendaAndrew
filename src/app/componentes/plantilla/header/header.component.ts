
//import { Component } from '@angular/core';

//@Component({
//  selector: 'app-header',
//  templateUrl: './header.component.html',
//  styleUrl: './header.component.scss'
//})
//export class HeaderComponent {
//  sidebarVisible: boolean = false;
//}
import { Component, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
//import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';
import { CartComponent } from '../../cart/cart.component';


//import { CartComponent } from '../path-to-your-cart-component/cart.component'; // Asegúrate de proporcionar la ruta correcta

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() show: EventEmitter <void> = new EventEmitter <void>()
    showCart(){
      this.show.emit()
    }
  
  sidebarVisible: boolean = false;

  constructor(private dialogService: DialogService) {}

  openCartDialog() {
    const ref = this.dialogService.open(CartComponent, {
      header: 'Carrito de Compras',
      width: '70%',
      style: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
}


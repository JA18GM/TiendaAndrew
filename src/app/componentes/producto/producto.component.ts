import { Component, Input } from '@angular/core';
//import { Producto } from '../../interfaces/producto';
import { CalendarModule } from 'primeng/calendar';
//import { CartProducto } from '../../interfaces/cart-producto';
import { Producto } from '../../interface/producto';
import { CartProducto } from '../../interface/cart-producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  @Input() producto?: Producto;



cart: CartProducto[] = []

  constructor() {
  }

  

  get nombre() {
    return this.producto?.nombre
  }

  add() {
    this.cart = JSON.parse(localStorage.getItem('cart') as string)
 
    /*if (this.cart.length > 0 ) {
      this.cart.forEach(elem => {
        if (elem.id === this.producto?.id) {
          elem.cantidad += 1
        }
      })


    }else {
      this.cart.push({id: this.producto?.id ,
        nombre: this.producto?.nombre as string,
        direccion: this.producto?.direccion as string,
        fechas: new Date(),
        telefono: this.producto?.telefono as string,
        descripcion: producto?.descripcion as string,
        precio: this.producto?.precio as number,
        imagen: this.producto?.imagen as string,
       cantidad: 1
    })*/
    
  }
  }
  



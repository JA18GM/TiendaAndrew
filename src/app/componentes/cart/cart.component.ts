import { Component, OnInit } from '@angular/core';
import { CartProducto } from '../../interface/cart-producto';
import { CarritoService } from '../../carrito.service';
import { Producto } from '../../interface/producto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  carrito!: Producto[];



  calcularTotal(): number {
    //let total=0

    //return total;
    return this.carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  }

  /*dd(producto: any) {
    console.log('producto agregado al carrito:', producto);
    this.carritoService.agregarAlCarrito(producto); // Llama al método del servicio para agregar el producto al carrito
  }*/
  add(producto: Producto, color: string, tipo: string) {
    console.log('producto agregado al carrito:', producto);
    producto.color = color;
    producto.tipo = tipo;
    this.carritoService.agregarAlCarrito(producto); // Llama al método del servicio para agregar el producto al carrito
  }
  

  //constructor(private carritoService: CarritoService) {}

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carrito = JSON.parse(localStorage.getItem('cart') || '[]');
  }
}

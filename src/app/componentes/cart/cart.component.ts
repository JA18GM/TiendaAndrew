import { Component, OnInit } from '@angular/core';
import { CartProducto } from '../../interface/cart-producto';
import { CarritoService } from '../../carrito.service';
import { Producto } from '../../interface/producto';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

//import { PagoComponent } from '../../component/pago/pago.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  carrito!: Producto[];
  totalDonation: number = 0;

  iva: number = 0;

calcularIVA(): number {
  this.iva = this.calcularTotal() * 0.16; // Calcula el 16% del total
  return this.iva;
}

TotalPagar(){
  //sessionStorage.setItem("CarritoTotal")
  localStorage.setItem("TotalCarrito",this.calcularTotal().toString())
  this.openCheckout()
}

 calcularTotal(): number {
  return this.carrito.reduce((acc, producto) => {
    return acc + (producto.precio * producto.cantidad);
  }, 0);
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

  constructor(private carritoService: CarritoService, private router: Router) {
    this.carrito = [];
  }
  ngOnInit(): void {
    // Cargar el carrito desde el almacenamiento local al iniciar el componente
    this.carrito = JSON.parse(localStorage.getItem('cart') || '[]');
    // Calcular el total del carrito
    this.calcularTotal();
    // Renderizar el botón de PayPal
  }
  goToClient(): void {
    this.router.navigate(['client'])
    //this.router.navigate(['/client']); // Navega a la ruta '/client' cuando se hace clic en el botón
  }

  openCheckout(): void {
    window.open('/assets/client/checkout.html', '_blank'); // Abre checkout.html en una nueva pestaña del navegador
  }
}

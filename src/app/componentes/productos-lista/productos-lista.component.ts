import { Component } from '@angular/core';
//import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';
import { CalendarModule } from 'primeng/calendar';
import { Producto } from '../../interface/producto';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.scss',
})
export class ProductosListaComponent {
  productos: Producto[] = []; // Inicializando productos como un array vacío
  //productoService: any;

  //constructor(private productoService: ProductoService){}

  constructor(private productoService: ProductosService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe((response) => {
      this.productos = response;
    });
  }

  add(producto: Producto): void {
    console.log('Add metodo');

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existente = cart.find(
      (elem: { producto: string }) => elem.producto === producto?.imagen
    );

    if (existente) {
      existente.cantidad += 1;
    } else {
      cart.push({
        id: producto?.id as number,
        nombre: producto?.nombre as string,
        descripcion: producto?.descripcion as string,
        precio: producto?.precio as number,
        imagen: producto?.imagen as string,
        cantidad: 1,
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    // this.productoService.actualizarCarrito(cart);
  }

  getSeverity(producto: Producto) {
    switch (producto.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
  seleccionarColor(producto: Producto, color: string): void {
    producto.color = color;
  }
  
  seleccionarTipoBoton(producto: Producto, tipo: string): void {
    producto.tipoBoton = tipo;
  }
  
}

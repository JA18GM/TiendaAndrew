import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from './interface/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$: Observable<any[]> = this.carritoSubject.asObservable();
  
  constructor(private http: HttpClient) { }

  carrito: any;

  actualizarCarrito(nuevoCarrito: any[]): void {
    this.carritoSubject.next(nuevoCarrito);
  }

  agregarAlCarrito(producto: any) {
    const carritoActual = this.carritoSubject.getValue();
    const nuevoCarrito = [...carritoActual, producto];
    this.carritoSubject.next(nuevoCarrito);
  }

  addProduct(producto: Producto): Observable<any> {
    return this.http.post<any>('url_para_agregar_producto_al_carrito', producto);
  }

  getCart(): Observable<any> {
    return this.http.get<any>('url_para_obtener_carrito');
  }

  // Función para guardar el nuevo producto en el carrito localmente
  guardarNuevoProducto(producto: Producto): void {
    // Obtener el valor actual del carrito local
    const carritoLocal = JSON.parse(localStorage.getItem('carrito') || '[]');
    // Agregar el nuevo producto al carrito local
    carritoLocal.push(producto);
    // Actualizar el carrito local en el almacenamiento
    localStorage.setItem('carrito', JSON.stringify(carritoLocal));
  }
}

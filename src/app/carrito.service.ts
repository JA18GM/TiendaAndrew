import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$: Observable<any[]> = this.carritoSubject.asObservable();
  
  constructor(){
    this.carrito=[]
  }
  carrito: any;

  actualizarCarrito(nuevoCarrito: any[]): void {
    this.carritoSubject.next(nuevoCarrito);
  }

  agregarAlCarrito(producto: any) {
    // Obtiene el valor actual del carrito
    const carritoActual = this.carritoSubject.getValue();
    // Agrega el nuevo producto al carrito actual
    const nuevoCarrito = [...carritoActual, producto];
    // Emite el nuevo valor del carrito
    this.carritoSubject.next(nuevoCarrito);
  }
}

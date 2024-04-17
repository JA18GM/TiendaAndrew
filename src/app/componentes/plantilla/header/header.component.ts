import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router'; // Importa Router
import { CartComponent } from '../../cart/cart.component';
import { AgregarComponent } from '../../agregar/agregar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corregido aquí
})
export class HeaderComponent {
  @Input() usuarioAutenticado: boolean = false; // Propiedad de entrada para usuario autenticado
  @Output() show: EventEmitter<void> = new EventEmitter<void>();
  sidebarVisible: boolean = false;

  constructor(private router: Router, private dialogService: DialogService) {}

  openCartDialog() {
    const ref = this.dialogService.open(CartComponent, {
      header: 'Carrito de Compras',
      width: '70%',
      style: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  navigateToAddComponent() {
    this.router.navigate(['/agregar']); // Navega al componente "Agregar"
  }

  openAgregar() {
    const ref = this.dialogService.open(AgregarComponent, {
      width: '90%',
      style: { 'max-height': '800px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Producto } from '../../interface/producto';
import { ProductosService } from '../../servicios/productos.service';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  productoDialog: boolean = false;
  productos: Producto[] = []; // Inicializamos la variable productos con un array vacío
  producto: Producto = {
    id: 0,
    tipos: '',
    colores: '',
    inventoryStatus: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    color: '',
    tipo: '',
    imagen: '',
    cantidad: 0,
    tipoBoton: ''
  };
  selectedProductos: Producto[] | null = null;
  submitted: boolean = false;
  statuses: any[] = [];

  constructor(
    private productoService: ProductosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private carritoService: CarritoService // Agrega el servicio del carrito
  ) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error fetching productos:', error);
      }
    );

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {
    this.producto = {
      id: 0,
      tipos: '',
      colores: '',
      inventoryStatus: '',
      nombre: '',
      descripcion: '',
      precio: 0,
      color: '',
      tipo: '',
      imagen: '',
      cantidad: 0,
      tipoBoton: ''
    };
    this.submitted = false;
    this.productoDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Estas seguro, de querer eliminarlo?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const selectedProductos = this.selectedProductos ?? [];
        this.productos = this.productos.filter((val) => !selectedProductos.includes(val));
        this.selectedProductos = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Productos Deleted', life: 3000 });
      }
    });
  }

  editProduct(producto: Producto) {
    this.producto = { ...producto };
    this.productoDialog = true;
  }

  deleteProduct(producto: Producto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + producto.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productos = this.productos.filter((val) => val.id !== producto.id);
        this.producto = {
          id: 0,
          tipos: '',
          colores: '',
          inventoryStatus: '',
          nombre: '',
          descripcion: '',
          precio: 0,
          color: '',
          tipo: '',
          imagen: '',
          cantidad: 0,
          tipoBoton: ''
        };
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productoDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
  
    if (this.producto.nombre?.trim()) {
      if (this.producto.id) {
        this.productos[this.findIndexById(this.producto.id)] = this.producto;
        this.updateCartJson();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        this.producto.id = this.createId();
        this.producto.imagen = 'product-placeholder.svg';
        this.productos.push(this.producto);
        this.carritoService.guardarNuevoProducto(this.producto); 
        this.updateCartJson();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
  
        // Actualizar la lista de productos en la interfaz de usuario
        this.productos = [...this.productos]; 
      }
  
      this.productoDialog = false;
      this.producto = {
        id: 0,
        tipos: '',
        colores: '',
        inventoryStatus: '',
        nombre: '',
        descripcion: '',
        precio: 0,
        color: '',
        tipo: '',
        imagen: '',
        cantidad: 0,
        tipoBoton: ''
      };
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Name is required.', life: 3000 });
    }
  }
  
  

  findIndexById(id: number): number {
    return this.productos.findIndex((producto) => producto.id === id);
  }

  createId(): number {
    return Math.floor(Math.random() * 1000) + 1; // Generar un ID aleatorio
  }

  updateCartJson() {
    this.carritoService.getCart().subscribe((cart) => {
      // Guardar el carrito actualizado en el archivo cart.json
      // Aquí deberías guardar la respuesta del servicio en el archivo cart.json
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }

  onFileSelect(event: any) {
    if (event && event.files) {
      const file = event.files[0]; // Accede al primer archivo seleccionado, si existe
      if (file) {
        // Aquí puedes realizar acciones con el archivo, por ejemplo, mostrar un mensaje
        this.messageService.add({ severity: 'info', summary: 'File Selected', detail: `Name: ${file.name}, Size: ${file.size}` });
      } else {
        this.messageService.add({ severity: 'warn', summary: 'No File Selected', detail: 'Please select a file.' });
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: 'No File Selected', detail: 'Please select a file.' });
    }
  }

}

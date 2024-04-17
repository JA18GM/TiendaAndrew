import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productoService: any;
  products: any;
  statuses: { label: string; value: string; }[] | undefined;
  
  ngOnInit(){
    this.productoService.get().subscribe((products: any) => {
        this.products = products;
    });

    this.statuses = [
        {label: 'INSTOCK', value: 'instock'},
        {label: 'LOWSTOCK', value: 'lowstock'},
        {label: 'OUTOFSTOCK', value: 'outofstock'}
    ]
}
}

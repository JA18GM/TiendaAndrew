import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListaComponent } from '../../componentes/productos-lista/productos-lista.component';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { ModprimengModule } from '../../modprimeng.module';



@NgModule({
  declarations: [
    ProductosListaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ModprimengModule
  ],
  exports: [
    ProductosListaComponent,
    ProductoComponent
  ]
  
})
export class ProductosModule { }


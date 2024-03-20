import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ModprimengModule } from './modprimeng.module';
import { ModPrimeNgModule } from './mod-prime-ng/mod-prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
//import { HeaderComponent } from './componentes/plantillas/header/header.component';
//import { FooterComponent } from './componentes/plantillas/footer/footer.component';
import { HeaderComponent } from './componentes/plantilla/header/header.component';
import { FooterComponent } from './componentes/plantilla/footer/footer.component';
import { ProductosModule } from './modulos/productos/productos.module';
import { ProductosListaComponent } from './componentes/productos-lista/productos-lista.component';
import { CartComponent } from './componentes/cart/cart.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms'; // Importa FormsModule



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ModprimengModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductosModule,
   SidebarModule,
   ButtonModule,
   FormsModule
   
   

  ],
  providers: [
    MessageService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  //constructor(private service:ProductosService){
   // localStorage.setItem('cart', JSON.stringify([]))
  //}
  constructor(){
    localStorage.setItem('cart',JSON.stringify([]))
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModPrimeNgModule } from './mod-prime-ng/mod-prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/plantilla/header/header.component';
import { FooterComponent } from './componentes/plantilla/footer/footer.component';
import { ProductosModule } from './modulos/productos/productos.module';
import { ProductosListaComponent } from './componentes/productos-lista/productos-lista.component';
import { CartComponent } from './componentes/cart/cart.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { NgxPayPalModule } from 'ngx-paypal';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { TableModule } from 'primeng/table'; // Importa TableModule de PrimeNG
import { RatingModule } from 'primeng/rating'; // Importa RatingModule de PrimeNG
import { TagModule } from 'primeng/tag'; // Importa TagModule de PrimeNG
import { ToastModule } from 'primeng/toast'; // Importa ToastModule de PrimeNG
import { ToolbarModule } from 'primeng/toolbar'; // Importa ToolbarModule de PrimeNG
import { FileUploadModule } from 'primeng/fileupload'; // Importa FileUploadModule de PrimeNG
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegisterComponent } from './componentes/register/register.component';
//import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
/////////////////////////////
import { ToolBarComponent } from './componentes/toolbar/toolbar.component';
import { CardModule } from 'primeng/card'
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    AgregarComponent,
    HomeComponent,
    LoginComponent,
    ProductosComponent,
    RegisterComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductosModule,
    SidebarModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    NgxPayPalModule,
    TableModule, // Agrega TableModule aquí
    RatingModule, // Agrega RatingModule aquí,
    TagModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    RadioButtonModule, 
    CardModule
  ],
  providers: [
    MessageService,
    DialogService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    localStorage.setItem('cart',JSON.stringify([]))
  }
}

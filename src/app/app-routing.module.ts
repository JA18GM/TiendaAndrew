import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HomeComponent } from './componentes/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ProductosListaComponent } from './componentes/productos-lista/productos-lista.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para el componente de Login
  { path: 'register', component: RegisterComponent }, // Ruta para el componente de Registro
  { path: 'home', component: HomeComponent, canActivate: [authGuard] }, // Ruta para el componente de Home (requiere autenticación)
  { path: 'productos-lista', component: ProductosListaComponent }, // Ruta para el componente de Productos Lista
  { path: 'agregar', component: AgregarComponent }, // Ruta para el componente de Agregar
  
  // Ruta por defecto: redirige al componente de login
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  // Ruta para cualquier otra URL desconocida: redirige al componente de login
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

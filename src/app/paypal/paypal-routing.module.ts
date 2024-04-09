import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PagoComponent } from './pago/pago.component';

const routes: Routes = [
  //{ path: 'pago', component: PagoComponent }, // Ruta para el componente de pago
  // Otras rutas si es necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayPalRoutingModule { }



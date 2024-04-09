import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
    templateUrl: './your.component.html',
})
export class YourComponent implements OnInit {

    public payPalConfig?: IPayPalConfig;
    showSuccess!: boolean;
    showCancel!: boolean;
    showError!: boolean;
  paypalComponent1: any;
  paypalComponent2: any;
  payPalScriptService: any;

   
  ngOnInit(): void {
    // Inicializa payPalConfig con todas las propiedades requeridas
    this.payPalConfig = {
        clientId: 'tu-client-id-aqui', // Reemplaza 'tu-client-id-aqui' con tu ID de cliente real
        currency: 'EUR',
        createOrderOnClient: (data) => <ICreateOrderRequest>{
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            this.resetStatus();
        },
    };
}

  resetStatus() {
      throw new Error('Method not implemented.');
  }
}
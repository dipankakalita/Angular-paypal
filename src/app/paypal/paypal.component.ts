import { Component, OnInit } from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

  public payPalConfig ? : IPayPalConfig;
  showSuccess:any;
  constructor() { }

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    // this.payPalConfig = {
    // currency: 'USD',
    // clientId: 'AVQ6jFUeUKzsyR2p7L9TS4fz49-8TYYupo4wJfhuVOrwUP6VHWXuaABPRkBuMzcUQjUwuOCzCO53e0KY',
    // createOrderOnClient: (data) => <ICreateOrderRequest>{
    //   intent: 'CAPTURE',
    //   purchase_units: [
    //     {
    //       amount: {
    //         currency_code: 'USD',
    //         value: '20.00'
    //       }
    //     }
    //   ]
    // },
    // advanced: {
    //   commit: 'true'
    // },
    // style: {
    //   label: 'paypal',
    //   layout: 'vertical'
    // },
    // onApprove: (data, actions) => {
    //   console.log('onApprove - transaction was approved, but not authorized', data, actions);
    //   actions.order.get().then((details: any) => {
    //     console.log('onApprove - you can get full order details inside onApprove: ', details);
    //     this.test()
    //   });
    // },
    // onClientAuthorization: (data) => {
    //   console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    //   this.showSuccess = true;
    // },
    // onCancel: (data, actions) => {
    //   console.log('OnCancel', data, actions);
    // },
    // onError: err => {
    //   console.log('OnError', err);
    // },
    // onClick: (data, actions) => {
    //   console.log('onClick', data, actions);
    // },
  // };

  this.payPalConfig = {
    currency: 'USD',
    clientId: 'AX2MNbOSgC95hEWIAps7L94ZIg48YdS5CSpicZTGlnPg3Z_Ydl5Cblv4oO2TbUDa1S9YLzeSTkNg31zS',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '10.00'
          }
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'horizontal',
      tagline :false,
    },
    // onApprove: (data, actions) => {
    //   console.log('onApprove - transaction was approved, but not authorized', data, actions);
    //   actions.order.get().then((details: any) => {
    //     console.log('onApprove - you can get full order details inside onApprove: ', details);
    //   });
    // },

    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      // this.paypalPayment()
    },
    onCancel: (data, actions) => {
      // this.toasty.error(this.translate.instant('The payment has been cancelled, please try again!'));
      // return this.router.navigate(['/payments/cancel']);
    },
    onError: err => {
      // return this.toasty.error(this.translate.instant(err));
    },
    // onClick: (data, actions) => {
    //   console.log('onClick', data, actions);
    // },
  }
  }

  test(){
    alert("test");
  }

}

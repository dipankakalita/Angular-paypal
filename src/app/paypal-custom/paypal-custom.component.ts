import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paypal-custom',
  templateUrl: './paypal-custom.component.html',
  styleUrls: ['./paypal-custom.component.scss']
})
export class PaypalCustomComponent implements OnInit {
  @ViewChild('paypalRef',{static:true}) private paypalRef: any;
  constructor() { }

  ngOnInit(): void {
    window.paypal.Buttons(
      {
        style:{
          layout: 'horizontal',
          color: 'white',
          shape: 'rect',
          label: 'paypal',
          tagline :false
        },

        createOrder(data:any, actions:any) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: '55',
                      currency_code: 'USD'
                  }
              }]
          });
        },

        onApprove(data:any, actions:any) {
          return actions.order.capture().then((details: any)=>{
            console.log("Transaction completed1");
            // alert('Transaction completed by ' + details.payer.name.given_name);
            // return this.test()
            // console.log("Transaction completed1");
          })
        },

        onClientAuthorization: (data:any) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          // this.test()
        },

        onerror:(error: any)=>{
          console.log(error);
          
        },

        onCancel: function (data:any) {
          // Show a cancel page, or return to cart
        }
      }
    ).render(this.paypalRef.nativeElement)
  }  
  
  
  test(){
    alert("test");
  }

}

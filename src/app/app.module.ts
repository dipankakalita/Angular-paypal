import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalComponent } from './paypal/paypal.component';
import { PaypalCustomComponent } from './paypal-custom/paypal-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    PaypalComponent,
    PaypalCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

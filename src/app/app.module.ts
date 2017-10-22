import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsRouting } from './products/products.routing';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/cart.component';
import { CartsModule } from './cart/carts.module';
import { CartsRouting } from './cart/carts.routing';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ACTIONS } from './store/actions';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    ProductsRouting,
    CartsModule,
    CartsRouting,
    NgxChartsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { }),
  ],
  providers: [ACTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }

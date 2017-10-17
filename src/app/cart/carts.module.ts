import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CartComponent } from './cart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    CartComponent,
    ProductComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class CartsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsService } from './products.service';
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
    ProductsComponent,
    ProductFormComponent,
    ProductComponent
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
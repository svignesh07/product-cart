import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';

const productsRoutes: Routes = [

  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
  { path: 'products/new', component: ProductFormComponent},
  { path: 'products/:id', component: ProductFormComponent},
];

export const ProductsRouting = RouterModule.forChild(productsRoutes);

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


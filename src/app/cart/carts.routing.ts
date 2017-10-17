import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';

const cartRoutes: Routes = [

  { path: 'carts', component: CartComponent, pathMatch: 'full' }
];

export const CartsRouting = RouterModule.forChild(cartRoutes);
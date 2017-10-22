import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from '../products/products.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private cart_products_path = 'cartProducts';
  private getProductsSubscription: any;
  cart_products = [];
  total_items = 0;
  total_cost = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProductsSubscription = this.productsService.getProducts(this.cart_products_path)
    .subscribe((data) => {
      this.cart_products = data;
      this.total_cost = this.calculateTotalPrice(data);
      this.total_items = this.cart_products.reduce(function (acc, obj) { return acc + obj.quantity; }, 0);
    });
  }

  updateCart() {
    this.total_cost = this.calculateTotalPrice(this.cart_products);
    this.total_items = this.cart_products.reduce(function (acc, obj) { return acc + obj.quantity; }, 0);
  }

  // Returns the total Price for each Product Category
  calculateTotalPrice(array) {
    let price = 0;

    for (let i = 0; i < array.length; i++) {
      price += parseFloat(array[i].price) * parseFloat(array[i].quantity);
    }
    return price;
  }

  onProductDelete() {
    this.updateCart();
  }

  ngOnDestroy() {
    // Unsubscribe
    if (this.getProductsSubscription) {
      this.getProductsSubscription.unsubscribe();
    }
  }

}



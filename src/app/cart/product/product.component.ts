import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { ProductsService } from '../../products/products.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cart-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnDestroy {
  deleteProductSubscription: Subscription;
  total_cost = 0;

  @Input() cart_products;
  @Output() productDeleted: EventEmitter<any> = new EventEmitter<any>();
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
  }

  // Returns the total Price
  calculateTotalPrice(array) {
    let price = 0;

    for (let i = 0; i < array.length; i++) {
      price += parseFloat(array[i].price);
    }
    return price;
  }  

  updateCart() {
    this.total_cost = this.calculateTotalPrice(this.cart_products);
  }

  onProductDelete() {
    this.updateCart();
  }  

  removeProductFromCart(product) {

    if (confirm('Are you sure you want to remove - ' + product.name + '?')) {
      const index = this.cart_products.indexOf(product);
      let path = 'cartProducts';
      this.deleteProductSubscription = this.productsService.deleteProduct(path, product.id)
        .subscribe((res) => {
          this.cart_products.splice(index, 1);
          this.productDeleted.emit();
        },
        err => {
          alert('Could\'nt delete the product.');
        });
    }
  }

  ngOnDestroy() {
    if (this.deleteProductSubscription) {
      this.deleteProductSubscription.unsubscribe();
    }
  }

}

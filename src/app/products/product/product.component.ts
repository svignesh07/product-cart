import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from './../products.service';
import { Subscription } from 'rxjs/Rx';
import { CartAction } from 'app/store/actions/cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy {
  deleteProductSubscription: Subscription;
  private quantity: number = 1;

  @Input() products;
  @Output() productDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productsService: ProductsService,
              private cartAction: CartAction) {}

  ngOnInit() {
  }

  // Add to cart
  addToCart(product) {
    this.cartAction.addToCart(product, this.quantity)
  }

  // Delete product from the stock
  deleteProduct(product) {

    if (confirm('Are you sure you want to delete - ' + product.name + '?')) {
      const index = this.products.indexOf(product);
      let path = 'products';
      this.deleteProductSubscription = this.productsService.deleteProduct(path, product.id)
        .subscribe((res) => {
          this.products.splice(index, 1);
          this.productDeleted.emit();
        },
        err => {
          alert('Could\'nt delete the product.');
        });
    }
  }
  incrementQuantity(product) {

  }
  decrementQuantity(product) {

  }

  ngOnDestroy() {
    if (this.deleteProductSubscription) {
      this.deleteProductSubscription.unsubscribe();
    }
  }

}

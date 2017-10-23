import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Renderer } from '@angular/core';
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
  public cart = [];
  public cartSubscription: Subscription;

  @Input() products;
  @Output() productDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productsService: ProductsService,
              private cartAction: CartAction) {}

  ngOnInit() {
    this.cartSubscription = this.cartAction.getState().subscribe(res => {
      this.cart = res.products
    })
  }

  // Add to cart
  addToCart(product) {
    const index = this.cart.findIndex((p) => p.id === product.id);
    if(index > -1) {
      if(this.remainingQuantity(product) > product.sold) {
        this.cartAction.addToCart(product, (product.sold + 1))
      }
    }
    else {
      this.cartAction.addToCart(product, (product.sold + 1))
    }
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
  remainingQuantity(product):number {
    const index = this.cart.findIndex((p) => p.id === product.id);
    if(index > -1) {
      return (product.quantity - this.cart[index]["quantity"])
    } else {
      return product.quantity - (product.sold + 1)
    }
  }
  incrementQuantity(product) {
    const index = this.cart.findIndex((p) => p.id === product.id);
    if(index > -1) {
      if(this.cart[index]["quantity"] < product.quantity) {
        product.sold++;
      }
    } else {
      if((product.sold + 1) < product.quantity) {
        product.sold++;
      }
    }
  }
  decrementQuantity(product) {
    if(product.sold > 0) {
      product.sold--;
    }
  }

  ngOnDestroy() {
    if (this.deleteProductSubscription) {
      this.deleteProductSubscription.unsubscribe();
    }
  }

}

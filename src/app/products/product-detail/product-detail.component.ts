import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../products/product';
import { ProductsService } from './../products.service';
import { CartAction } from 'app/store/actions/cart.actions';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.scss']
})

export class ProductDetailComponent {
  selectedProduct: Product;
  quantity: number = 1;
  public cart = [];
  public cartSubscription: Subscription;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartAction: CartAction
  ) { }

  // Add to cart
  addToCart(product) {
    const index = this.cart.findIndex((p) => p.id === product.id);
    if(index > -1) {
      if(this.remainingQuantity(product) > this.quantity) {
        this.cartAction.addToCart(product, (this.quantity))
      }
    }
    else {
      this.cartAction.addToCart(product, (this.quantity))
    }
  }

  // Fetch the product based on the product id and set it as selectedProduct
  ngOnInit() {
    this.cartSubscription = this.cartAction.getState().subscribe(res => {
      this.cart = res.products
    })
    this.route.params.forEach(param => {
      let product_id = parseInt(param['id']),
        path = 'products';

      this.productsService.getProduct(path, product_id)
        .subscribe(
        product => this.selectedProduct = product,
        response => {
          if (response.status === 404) {
            // Navigate to 404 Not Found
          }
        });

    })
  }

  remainingQuantity(product):number {
    const index = this.cart.findIndex((p) => p.id === product.id);
    if(index > -1) {
      return (product.quantity - this.cart[index]["quantity"])
    } else {
      return product.quantity - (this.quantity)
    }
  }

  incrementQuantity(selectedProduct) {
    debugger
    if(this.quantity < selectedProduct.quantity) {
      this.quantity ++;
    }
  }

  decrementQuantity() {
    if(this.quantity > 1) {
      this.quantity --;
    }
  }

}
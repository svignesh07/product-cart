import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../products/product';
import { ProductsService } from './../products.service';
import { CartAction } from 'app/store/actions/cart.actions';

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.scss']
})

export class ProductDetailComponent {
  selectedProduct: Product;
  quantity: number = 1;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartAction: CartAction
  ) { }

  addToCart(product) {
    this.cartAction.addToCart(product, this.quantity)
  }

  // Fetch the product based on the product id and set it as selectedProduct
  ngOnInit() {
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

  incrementQuantity(selectedProduct) {
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
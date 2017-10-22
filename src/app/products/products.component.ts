import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private products_path = 'products';
  private getProductsSubscription: any;
  products = [];
  total_cost = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProductsSubscription = this.productsService.getProducts(this.products_path)
    .subscribe((data) => {
      this.products = data;
      this.total_cost = this.calculateTotalPrice(data);
    });
  }

  updateCart() {
    this.total_cost = this.calculateTotalPrice(this.products);
  }

  filterProducts(search) {
    if(search.length > 0) {
      this.productsService.getProducts(this.products_path)
      .subscribe((data) => {
        this.products = data.filter((product) => {
          return product.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
      });
    } else {
      this.productsService.getProducts(this.products_path)
      .subscribe((data) => {
        this.products = data;
      });
    }

  }
  // Returns the total Price
  calculateTotalPrice(array) {
    let price = 0;

    for (let i = 0; i < array.length; i++) {
      price += parseFloat(array[i].price);
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  product: Product = new Product();
  private getProductSubscription: any;
  private getProductsSubscription: any;

  constructor(fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService) {
      this.form = fb.group({
        id: [null, ''],
        name: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required],
        price: ['', Validators.required],
        quantity: ['', Validators.required]
      });
     }

     ngOnInit() {
      this.getProductSubscription = this.route.params.subscribe(params => {

        const product_id = params['id']

        this.title = product_id ? 'Edit Product' : 'New Product';
        let path = 'products';

        if (!product_id) {
          return;
        }

        this.getProductsSubscription = this.productsService.getProduct(path, product_id)
          .subscribe(
          product => this.product = product,
          response => {
            if (response.status === 404) {
              // Navigate to 404 Not Found
            }
          });
      });
    }

    addProduct(product) {
      let result;
      let path = "products";

      this.route.params.subscribe((res) => {
        if (product.id) {
          result = this.productsService.updateProduct(path, product, product.id);
        } else if (product.id) {
          this.productsService.deleteProduct(path, product.id)
            .subscribe(null, err => {
              console.log(err);
            });
          delete (product.id); // to add a new product in a new category
          result = this.productsService.addProduct(path, product);
        } else {
          result = this.productsService.addProduct(path, product);
        }
      });

      // Route to products page after product addition or updation
      result.subscribe(data => this.router.navigate(['products']));
    }

    ngOnDestroy() {
      // Unsubscribe
      if (this.getProductsSubscription) {
        this.getProductsSubscription.unsubscribe();
      }
      if (this.getProductSubscription) {
        this.getProductSubscription.unsubscribe();
      }
    }

}
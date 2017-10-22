import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartAction } from 'app/store/actions/cart.actions';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  public cart = [];
  public totalPrice: number;
  public totalQuantity: number;
  public cartSubscription: Subscription;

  constructor(private cartStore: CartAction) {}

  ngOnInit() {
    this.cartSubscription = this.cartStore.getState().subscribe(res => {
      this.cart = res.products
      this.getTotalPrice()
    })
  }

  removeProduct(product) {
    this.cartStore.removeFromCart(product)
  }

  getTotalPrice() {
    let totalCost: Array<number> = []
    let quantity: Array<number> = []
    let intPrice: number
    let intQuantity: number
    this.cart.forEach((item, i) => {
      intPrice = parseInt(item.price)
      intQuantity = parseInt(item.quantity)
      totalCost.push(intPrice * intQuantity)
      quantity.push(intQuantity)
    })

    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item
    }, 0)
    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item
    }, 0)
  }

  incrementQuantity(product) {
    this.cartStore.incrementQuantity(product)
  }

  decrementQuantity(product) {
    this.cartStore.decrementQuantity(product);
  }

  ngOnDestroy() {
    // Unsubscribe
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}



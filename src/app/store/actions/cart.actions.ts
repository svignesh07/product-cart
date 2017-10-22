import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

function type(action) {
  return action;
}

export const ActionTypes = {
  ADD_TO_CART: type('[Cart] Add'),
  REMOVE_FROM_CART: type('[Cart] Remove'),
  INCREMENT_QUANTITY: type('[Cart] Increment'),
  DECREMENT_QUANTITY: type('[Cart] Decrement')
};

@Injectable()
export class CartAction {

  constructor(private store: Store<any>) {}

  getState(): Observable<any> {
    return this.store.select('cart');
  }

  addToCart(product, quantity) {
    this.store.dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: {
        product,
        quantity
      }
    })
  }

  removeFromCart(product) {
    this.store.dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: product
    })
  }

  incrementQuantity(product) {
    this.store.dispatch({
      type: ActionTypes.INCREMENT_QUANTITY,
      payload: product
    })
  }

  decrementQuantity(product) {
    this.store.dispatch({
      type: ActionTypes.DECREMENT_QUANTITY,
      payload: product
    })
  }

}
import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/cart.actions';
import { Product } from '../../products/product';

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const addProduct = Object.assign({}, action.payload.product);
      const index = state.products.findIndex((product) => product.id === action.payload.product.id);
      addProduct.total_quantity = addProduct.quantity;
      addProduct.quantity = action.payload.quantity;
      addProduct.price = (parseInt(addProduct.price) * parseInt(addProduct.quantity));
      if(index > -1) {
        state.products[index]["quantity"] += action.payload.quantity;
        return {
          ...state,
          products: [
            ...state.products
          ]
        };
      }
      return {
        ...state,
        products: [
          ...state.products,
          addProduct
        ]
      };
    };

    case ActionTypes.REMOVE_FROM_CART: {
      //  return a new array excluding the product that needs to be removed
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          ...state.products.slice(index + 1)
        ]
      }
    };

    case ActionTypes.INCREMENT_QUANTITY: {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      state.products[index].quantity++;
      return {
        ...state,
        products: [
          ...state.products
        ]
      }
    };

    case ActionTypes.DECREMENT_QUANTITY: {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if(state.products[index].quantity > 1) {
        state.products[index].quantity--;
      }
      return {
        ...state,
        products: [
          ...state.products
        ]
      }
    };

    default:
      return state;
  }
}

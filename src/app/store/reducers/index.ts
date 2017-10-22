import { compose } from '@ngrx/core';
import { combineReducers, ActionReducer, Action, ActionReducerMap } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import cartReducer from './cart.reducer';
import ICartState from './cart.state';

export interface IAppState {
  cart: ICartState;
}

export const reducers = {
  cart: cartReducer
};
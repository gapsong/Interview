/* @flow */
import { combineReducers } from 'redux';
import type { Dispatch } from 'redux';

import products from './modules/products';

export default combineReducers({
  products
});

export type Thunk<A> = (dispatch: Dispatch<A>, getState: () => Object) => any;

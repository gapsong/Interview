// @flow

import axios from 'axios';
import type { Thunk } from '../';

export type Product = {
  id?: number,
  category: string,
  content: string
};

type State = {
  status: 'stale' | 'loaded',
  data: Product[]
}

type AddProductAction = {
  type: 'ADD_PRODUCT',
  payload: Product
};

type DeleteProductAction = {
  type: 'DELETE_PRODUCT',
  payload: Product
};

type ProductsRefreshedAction = {
  type: 'PRODUCTS_REFRESHED',
  payload: Product[]
};

type Action = AddProductAction | DeleteProductAction | ProductsRefreshedAction ;

const defaultState : State = {
  status: 'stale',
  data: []
};

export default function reducer(state : State = defaultState, action : Action) : State {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        status: state.status,
        data: state.data.concat(action.payload)
      };

    case 'PRODUCTS_REFRESHED':
      return {
        status: 'loaded',
        data: action.payload
      };

    default:
      return state;
  }
}

export function addProduct(product : Product) : AddProductAction {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  };
}

export function saveProduct(category : string, content : string) : Thunk<AddProductAction> {
  return dispatch => {
    axios.post('/api/products', { category, content })
      .then(
        (success: { data: Product }) => dispatch(addProduct(success.data)),
        // TODO: something more helpful with this failure
        failure => console.error(failure)
      );
  };
}

export function deleteProduct(product : Product) : DeleteProductAction {
  return {
    type: 'DELETE_PRODUCT',
    payload: product
  };
}

export function removeProduct(category : string, content : string) : Thunk<DeleteProductAction> {
  return dispatch => {
    axios.delete('/api/products', { category, content })
      .then(
        (success: { data: Product }) => dispatch(deleteProduct(success.data)),
        // TODO: something more helpful with this failure
        failure => console.error(failure)
      );
  };
}

export function productsRefreshed(products : Product[]) : ProductsRefreshedAction {
  return {
    type: 'PRODUCTS_REFRESHED',
    payload: products
  };
}

export function refreshProducts() : Thunk<ProductsRefreshedAction> {
  return dispatch => {
    axios.get('/api/products')
      .then(
        (success: { data: Product[] }) => dispatch(productsRefreshed(success.data)),
        // TODO: something more helpful with this failure
        failure => console.log(failure)
      );
  };
}

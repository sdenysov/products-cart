import {IProductsState} from '@@products/models/products-state';
import {Action, createReducer, on} from '@ngrx/store';
import {ProductsActions} from './products.actions';

const initialState: IProductsState = {
  entries: []
};

const reducer = createReducer(initialState,
  on(
    ProductsActions.fetchSucceed,
    (state, {products}) => ({...state, entries: products})
  ),
  on(
    ProductsActions.add,
    (state, {product}) => ({...state, entries: [...state.entries, product]})
  )
);

export function productsReducer(state: IProductsState = initialState, action: Action): IProductsState {
  return reducer(state, action);
}


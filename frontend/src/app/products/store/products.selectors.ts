import {IProductsState} from '@@products/models/products-state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PRODUCTS_STORE_KEY} from './index';

export namespace ProductsSelectors {
  export const getState = createFeatureSelector<IProductsState>(PRODUCTS_STORE_KEY);
  export const getProducts = createSelector(getState, s => s.entries);
}



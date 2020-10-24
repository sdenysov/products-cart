import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IProductsCartState} from '@@products-cart/models/products-cart-state';
import {PRODUCTS_CART_STORE_KEY} from '@@products-cart/store/index';

export namespace ProductsCartSelectors {
  export const getState = createFeatureSelector<IProductsCartState>(PRODUCTS_CART_STORE_KEY);
  export const getProducts = createSelector(getState, s => s.entities);
}



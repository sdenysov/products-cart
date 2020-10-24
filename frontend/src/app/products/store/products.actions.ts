import {IProduct} from '@@products/models/product';
import {createAction, props} from '@ngrx/store';

export enum ProductsActionTypes {
  FETCH_PRODUCTS = '[Products] Fetch products',
  ADD_PRODUCT = '[Products] Add product',
  SET_PRODUCTS = '[Products] Set products',
}

export namespace ProductsActions {
  export const fetch = createAction(ProductsActionTypes.FETCH_PRODUCTS);
  export const fetchSucceed = createAction(ProductsActionTypes.SET_PRODUCTS, props<{ products: IProduct[] }>());
  export const add = createAction(ProductsActionTypes.ADD_PRODUCT, props<{ product: IProduct }>());
}

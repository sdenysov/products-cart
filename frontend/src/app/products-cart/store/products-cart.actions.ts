import {IProductsCartItem} from '@@products-cart/models/products-cart-item';
import {createAction, props} from '@ngrx/store';

export enum ProductsCartActionTypes {
  ADD_PRODUCTS_CART_ITEM = '[Products-cart] Add product into cart',
  INCREMENT_PRODUCT_COUNT = '[Products-cart] Increment product count',
  SET_PRODUCTS_CART_ITEM = '[Products-cart] Set product into cart',
}

export namespace ProductsCartActions {
  export const addProductsCartItem = createAction(ProductsCartActionTypes.ADD_PRODUCTS_CART_ITEM, props<{ item: IProductsCartItem }>());
  export const incrementProductCount = createAction(ProductsCartActionTypes.INCREMENT_PRODUCT_COUNT, props<{ id: string }>());
  export const setProductsCartItem = createAction(ProductsCartActionTypes.SET_PRODUCTS_CART_ITEM,
    props<{ products: IProductsCartItem[] }>()
  );
}

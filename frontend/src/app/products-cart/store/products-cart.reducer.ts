import {IProductsCartState} from '@@products-cart/models/products-cart-state';
import {ProductsCartActions} from '@@products-cart/store/products-cart.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IProductsCartState = {
  entities: []
};

const reducer = createReducer(initialState,
  on(ProductsCartActions.addProductsCartItem, (state, {item}) => {
    const entities = [...state.entities, item];
    return {...state, entities};
  }),
  on(ProductsCartActions.incrementProductCount, (state, {id}) => {
    const entities = state.entities.map(e => e.id === id ? {...e, count: e.count + 1, summary: e.summary + e.price} : e);
    return {...state, entities};
  }),
  on(
    ProductsCartActions.setProductsCartItem,
    (state, {products}) => ({...state, entities: products})
  )
);

export function productsCartReducer(state: IProductsCartState = initialState, action: Action): IProductsCartState {
  return reducer(state, action);
}


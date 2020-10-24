import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IProductsCartState} from '@@products-cart/models/products-cart-state';
import {ProductsCartSelectors} from '@@products-cart/store/products-cart.selectors';
import {IProductsCartItem} from '@@products-cart/models/products-cart-item';
import {ProductsCartActions} from '@@products-cart/store/products-cart.actions';

@Injectable({providedIn: 'root'})
export class ProductsCartReduxFacade {

  constructor(private store: Store<{ productsCartItems: IProductsCartState }>) {}

  state$: Observable<IProductsCartState> = this.store.pipe(select(ProductsCartSelectors.getState));
  productsCartItems$: Observable<IProductsCartItem[]> = this.store.pipe(select(ProductsCartSelectors.getProducts));

  addProductsCartItem(item: IProductsCartItem) {
    this.store.dispatch(ProductsCartActions.addProductsCartItem({item}));
  }

  incrementProductCount(id: string) {
    this.store.dispatch(ProductsCartActions.incrementProductCount({id}));
  }
}

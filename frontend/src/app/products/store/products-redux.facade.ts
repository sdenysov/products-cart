import {IProduct} from '@@products/models/product';
import {IProductsState} from '@@products/models/products-state';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductsActions} from './products.actions';
import {ProductsSelectors} from './products.selectors';

@Injectable({providedIn: 'root'})
export class ProductsReduxFacade {

  constructor(private store: Store<{ products: IProductsState }>) {}

  state$: Observable<IProductsState> = this.store.pipe(select(ProductsSelectors.getState));
  products$: Observable<IProduct[]> = this.store.pipe(select(ProductsSelectors.getProducts));

  fetchProducts() {
    this.store.dispatch(ProductsActions.fetch());
  }

  add(product: IProduct) {
    this.store.dispatch(ProductsActions.add({product}));
  }
}

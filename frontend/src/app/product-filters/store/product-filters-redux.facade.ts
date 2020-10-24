import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductFiltersSelectors} from './product-filters.selectors';
import {IProductFiltersState} from '@@product-filters/models/product-filters-state';
import {ProductFiltersActions} from '@@product-filters/store/product-filters.actions';

@Injectable({providedIn: 'root'})
export class ProductFiltersReduxFacade {

  constructor(private store: Store<{ products: IProductFiltersState }>) {}

  state$: Observable<IProductFiltersState> = this.store.pipe(select(ProductFiltersSelectors.getState));

  setSearchQuery(searchQuery: string) {
    this.store.dispatch(ProductFiltersActions.setSearchQuery({searchQuery}));
  }

  selectCategory(categoryCode: string) {
    this.store.dispatch(ProductFiltersActions.setSelectedCategory({categoryCode}));
  }

  resetFilters() {
    this.store.dispatch(ProductFiltersActions.resetFilters());
  }
}

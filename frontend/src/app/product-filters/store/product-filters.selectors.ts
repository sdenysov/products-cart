import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PRODUCT_FILTERS_STORE_KEY} from './index';
import {IProductFiltersState} from '@@product-filters/models/product-filters-state';

export namespace ProductFiltersSelectors {
  export const getState = createFeatureSelector<IProductFiltersState>(PRODUCT_FILTERS_STORE_KEY);
  export const getSelectedCategory = createSelector(getState, s => s.selectedCategory);
  export const getSearchInputValue = createSelector(getState, s => s.searchInputValue);
}



import {Action, createReducer, on} from '@ngrx/store';
import {ProductFiltersActions} from './product-filters.actions';
import {IProductFiltersState} from '@@product-filters/models/product-filters-state';

const initialState: IProductFiltersState = {
  selectedCategory: null,
  searchInputValue: null
};

const reducer = createReducer(initialState,
  on(
    ProductFiltersActions.setSearchQuery,
    (state, {searchQuery}) => ({...state, searchInputValue: searchQuery})
  ),
  on(
    ProductFiltersActions.setSelectedCategory,
    (state, {categoryCode}) => ({...state, selectedCategory: categoryCode})
  ),
  on(ProductFiltersActions.resetFilters, (state) => ({...initialState}))
);

export function productFiltersReducer(state: IProductFiltersState = initialState, action: Action): IProductFiltersState {
  return reducer(state, action);
}


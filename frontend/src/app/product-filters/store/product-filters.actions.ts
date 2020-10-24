import {createAction, props} from '@ngrx/store';

export enum ProductFilterActionTypes {
  SET_SEARCH_QUERY = '[Product-filters] Set search query',
  SET_SELECTED_CATEGORY = '[Product-filters] Set selected category',
  RESET_FILTERS = '[Product-filters] Reset filters',
}

export namespace ProductFiltersActions {
  export const setSearchQuery = createAction(ProductFilterActionTypes.SET_SEARCH_QUERY, props<{ searchQuery: string }>());
  export const setSelectedCategory = createAction(ProductFilterActionTypes.SET_SELECTED_CATEGORY, props<{ categoryCode: string }>());
  export const resetFilters = createAction(ProductFilterActionTypes.RESET_FILTERS);
}

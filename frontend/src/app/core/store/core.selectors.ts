import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DICTIONARIES_STORE_KEY} from './index';
import {IDictionariesState} from '@@core/models/dictionaries-state';

export namespace CoreSelectors {
  export const getState = createFeatureSelector<IDictionariesState>(DICTIONARIES_STORE_KEY);
  export const getCategories = createSelector(getState, s => s.categories);
}



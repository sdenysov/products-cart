import {IDictionariesState} from '@@core/models/dictionaries-state';
import {Action, createReducer, on} from '@ngrx/store';
import {CoreActions} from '@@core/store/core.actions';

const initialState: IDictionariesState = {
  categories: []
};

const reducer = createReducer(initialState,
  on(CoreActions.fetchCategoriesSucceed, (state, {categories}) => ({...state, categories}))
);

export function dictionariesReducer(state: IDictionariesState, action: Action): IDictionariesState {
  return reducer(state, action);
}

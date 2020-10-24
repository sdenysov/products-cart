import {createAction, props} from '@ngrx/store';
import {IDictItem} from '@@shared/models/dict-item';

export enum CoreActionTypes {
  FETCH_PRODUCT_CATEGORIES = '[Core] Fetch categories',
  FETCH_PRODUCT_CATEGORIES_SUCCEED = '[Core] Fetch categories succeed'
}

export namespace CoreActions {
  export const fetchCategories = createAction(CoreActionTypes.FETCH_PRODUCT_CATEGORIES);
  export const fetchCategoriesSucceed = createAction(
    CoreActionTypes.FETCH_PRODUCT_CATEGORIES_SUCCEED,
    props<{ categories: IDictItem[] }>()
  );
}

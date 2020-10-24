import {IDictionariesState} from '@@core/models/dictionaries-state';
import {CoreSelectors} from '@@core/store/core.selectors';
import {DICTIONARIES_STORE_KEY} from '@@core/store/index';
import {IDictItem} from '@@shared/models/dict-item';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DictionariesReduxFacade {

  constructor(private store: Store<{ [DICTIONARIES_STORE_KEY]: IDictionariesState }>) {}

  state$: Observable<IDictionariesState> = this.store.pipe(select(CoreSelectors.getState));
  categories$: Observable<IDictItem[]> = this.store.pipe(select(CoreSelectors.getCategories));
}

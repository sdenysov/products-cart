import {Injectable} from '@angular/core';
import {map, mergeMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {CoreActions} from '@@core/store/core.actions';
import {IDictItem} from '@@shared/models/dict-item';
import {CoreRestService} from '@@core/services/core-rest.service';

@Injectable()
export class CoreEffects implements OnInitEffects {

  constructor(private actions$: Actions,
              private coreRestService: CoreRestService) {
  }

  fetchCategories$ = createEffect(() => this.actions$.pipe(
    ofType(CoreActions.fetchCategories),
    mergeMap(() => this.coreRestService.getCategories$().pipe(
      map((categories: IDictItem[]) => CoreActions.fetchCategoriesSucceed({categories}))
    ))
  ));

  ngrxOnInitEffects(): Action {
    return CoreActions.fetchCategories();
  }
}

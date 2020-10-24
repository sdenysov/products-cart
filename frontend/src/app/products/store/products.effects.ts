import {IProduct} from '@@products/models/product';
import {ProductsRestService} from '@@products/rest/products-rest.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {ProductsActions} from './products.actions';

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
              private productsRestService: ProductsRestService) {
  }

  fetchProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ProductsActions.fetch),
    mergeMap(() => this.productsRestService.get$().pipe(
      map((products: IProduct[]) => ProductsActions.fetchSucceed({products}))
    ))
  ));
}

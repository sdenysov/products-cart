import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '@@env/environment';

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [] : [];

@NgModule({
  imports: [
    StoreModule.forRoot({}, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: !environment.production,
        strictActionImmutability: !environment.production
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'products-cart',
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class AppReduxModule {}

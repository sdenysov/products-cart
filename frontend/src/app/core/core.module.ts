import {AppSharedModule} from '@@shared/app-shared.module';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {CoreEffects} from '@@core/store/core.effects';
import {StoreModule} from '@ngrx/store';
import {dictionariesReducer} from '@@core/store/dictionaries-reducer';
import {DICTIONARIES_STORE_KEY} from '@@core/store';

/**
 * All services which have to have one instance per application should be implemented here.
 */

@NgModule({
  imports: [
    AppSharedModule,
    StoreModule.forFeature(DICTIONARIES_STORE_KEY, dictionariesReducer),
    EffectsModule.forFeature([CoreEffects])
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}

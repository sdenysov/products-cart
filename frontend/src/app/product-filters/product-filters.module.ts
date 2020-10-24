import {NgModule} from '@angular/core';
import {ProductFiltersComponent} from '@@product-filters/components/product-filters/product-filters.component';
import {StoreModule} from '@ngrx/store';
import {PRODUCT_FILTERS_STORE_KEY} from '@@product-filters/store';
import {productFiltersReducer} from '@@product-filters/store/product-filters.reducer';
import {AppSharedModule} from '@@shared/app-shared.module';

@NgModule({
  imports: [
    AppSharedModule,
    StoreModule.forFeature(PRODUCT_FILTERS_STORE_KEY, productFiltersReducer)
  ],
  providers: [],
  declarations: [ProductFiltersComponent],
  exports: [ProductFiltersComponent],
})
export class AppProductFiltersModule {}

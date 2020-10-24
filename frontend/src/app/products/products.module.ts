import {ProductFormComponent} from '@@products/components/product-form/product-form.component';
import {ProductsComponent} from '@@products/components/product/products.component';
import {PRODUCTS_STORE_KEY} from '@@products/store';
import {ProductsEffects} from '@@products/store/products.effects';
import {productsReducer} from '@@products/store/products.reducer';
import {AppSharedModule} from '@@shared/app-shared.module';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    AppSharedModule,
    StoreModule.forFeature(PRODUCTS_STORE_KEY, productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [ProductsComponent, ProductFormComponent],
  exports: [ProductsComponent, ProductFormComponent]
})
export class AppProductsModule {}

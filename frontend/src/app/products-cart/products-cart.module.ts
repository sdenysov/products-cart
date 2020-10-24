import {ProductsCartComponent} from '@@products-cart/components/products-cart/products-cart.component';
import {PRODUCTS_CART_STORE_KEY} from '@@products-cart/store';
import {productsCartReducer} from '@@products-cart/store/products-cart.reducer';
import {AppSharedModule} from '@@shared/app-shared.module';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    AppSharedModule,
    StoreModule.forFeature(PRODUCTS_CART_STORE_KEY, productsCartReducer)
  ],
  declarations: [ProductsCartComponent],
  exports: [ProductsCartComponent]
})
export class AppProductsCartModule {}

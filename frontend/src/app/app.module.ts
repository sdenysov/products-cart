import {AppReduxModule} from '@@app/app-redux.module';
import {AppComponent} from '@@app/app.component';
import {CoreModule} from '@@core/core.module';
import {AppProductFiltersModule} from '@@product-filters/product-filters.module';
import {AppProductsCartModule} from '@@products-cart/products-cart.module';
import {AppProductsModule} from '@@products/products.module';
import {AppSharedModule} from '@@shared/app-shared.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    AppReduxModule,
    AppSharedModule,
    AppProductsModule,
    AppProductsCartModule,
    AppProductFiltersModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

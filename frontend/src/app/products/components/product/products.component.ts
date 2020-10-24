import {ProductsCartService} from '@@products-cart/services/products-cart.service';
import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from '@@products/models/product';
import {ProductsCartReduxFacade} from '@@products-cart/store/products-cart-redux.facade';
import {combineLatest, merge, Observable, of, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {ProductsReduxFacade} from '@@products/store/products-redux.facade';
import {ProductFiltersReduxFacade} from '@@product-filters/store/product-filters-redux.facade';
import {ProductService} from '@@products/services/product.service';
import {DictionariesReduxFacade} from '@@core/store/core-redux.facade';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void>;
  public products$: Observable<IProduct[]>;

  constructor(private productsCartService: ProductsCartService,
              private productsReduxFacade: ProductsReduxFacade,
              private productFiltersReduxFacade: ProductFiltersReduxFacade,
              private productService: ProductService) {
    this.unsubscribe$ = new Subject();
  }

  ngOnInit() {
    this.productsReduxFacade.fetchProducts();
    const products$ = this.productsReduxFacade.products$;
    const filters$ = this.productFiltersReduxFacade.state$;
    this.products$ = combineLatest([products$, filters$]).pipe(
      map(([products, filters]) => {
        return this.productService.filterProducts(products, filters);
      })
    );
  }

  sendProductIntoCart(product: IProduct) {
    this.productsCartService.addOrIncrementProductsCartItem(product);
  }

  trackByProducts(index: number, product: IProduct) {
    return product.id;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

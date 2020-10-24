import {IProductsCartItem} from '@@products-cart/models/products-cart-item';
import {ProductsCartReduxFacade} from '@@products-cart/store/products-cart-redux.facade';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-cart',
  templateUrl: 'products-cart.component.html',
  styleUrls: ['products-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCartComponent {
  public productsCartItems$: Observable<IProductsCartItem[]> = this.productsCartReduxFacade.productsCartItems$;

  constructor(private productsCartReduxFacade: ProductsCartReduxFacade) {}

  trackByProducts(index: number, product: IProductsCartItem) {
    return product.id;
  }
}

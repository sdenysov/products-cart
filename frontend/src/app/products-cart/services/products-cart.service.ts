import {IProductsCartItem} from '@@products-cart/models/products-cart-item';
import {ProductsCartReduxFacade} from '@@products-cart/store/products-cart-redux.facade';
import {IProduct} from '@@products/models/product';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {withLatestFrom} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductsCartService {

  private productsToAddSubject$: Subject<IProduct>;

  constructor(private productsCartReduxFacade: ProductsCartReduxFacade) {
    this.productsToAddSubject$ = new Subject();


    this.productsToAddSubject$.pipe(withLatestFrom(productsCartReduxFacade.productsCartItems$)).subscribe(([product, cartItems]) => {
      if (cartItems.some(item => item.id === product.id)) {
        productsCartReduxFacade.incrementProductCount(product.id);
      } else {
        const cartItem = this.createProductsCartItem(product);
        productsCartReduxFacade.addProductsCartItem(cartItem);
      }
    });
  }

  addOrIncrementProductsCartItem(product: IProduct) {
    this.productsToAddSubject$.next(product);
  }

  private createProductsCartItem(product: IProduct): IProductsCartItem {
    return {...product, count: 1, summary: product.price};
  }
}

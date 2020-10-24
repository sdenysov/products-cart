import {DictionariesReduxFacade} from '@@core/store/core-redux.facade';
import {ProductsCartReduxFacade} from '@@products-cart/store/products-cart-redux.facade';
import {IProduct} from '@@products/models/product';
import {NewProductFormService} from '@@products/services/product-form.service';
import {ProductsReduxFacade} from '@@products/store/products-redux.facade';
import {IDictItem} from '@@shared/models/dict-item';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: 'product-form.component.html',
  styleUrls: ['product-form.component.scss'],
  providers: [NewProductFormService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {

  public newProductForm: FormGroup;
  public categories$: Observable<IDictItem[]>;

  constructor(private newProductFormService: NewProductFormService,
              private productsReduxFacade: ProductsReduxFacade,
              private dictionariesReduxFacade: DictionariesReduxFacade) {
    this.newProductForm = this.newProductFormService.form;
    this.categories$ = this.dictionariesReduxFacade.categories$;
  }

  get title(): FormControl {
    return this.newProductFormService.title;
  }

  get category(): FormControl {
    return this.newProductFormService.category;
  }

  get price(): FormControl {
    return this.newProductFormService.price;
  }

  createProduct() {
    this.newProductFormService.submit$().subscribe((product: IProduct) => {
        this.productsReduxFacade.add(product);
      });
  }
}

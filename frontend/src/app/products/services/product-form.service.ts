import {IProduct} from '@@products/models/product';
import {ProductsRestService} from '@@products/rest/products-rest.service';
import {FormUtils} from '@@shared/utils/form.utils';
import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EMPTY, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

@Injectable()
export class NewProductFormService {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private productsRestService: ProductsRestService) {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      category: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0.01)]]
    });
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get category(): FormControl {
    return this.form.get('category') as FormControl;
  }

  get price(): FormControl {
    return this.form.get('price') as FormControl;
  }

  submit$() {
    if (!this.form.valid) {
      FormUtils.markAllAsTouched(this.form);
      return EMPTY;
    }
    const product: IProduct = this.form.value;
    return this.productsRestService.create$(product).pipe(
      catchError(error => {
        FormUtils.markAllAsTouched(this.form);
        return throwError(error);
      }),
      finalize(() => this.form.reset())
    );
  }
}

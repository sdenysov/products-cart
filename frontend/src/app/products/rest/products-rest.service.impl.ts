import {IProduct} from '@@products/models/product';
import {ProductsRestService} from '@@products/rest/products-rest.service';
import {ProductsRestServiceMock} from '@@products/rest/products-rest.service.mock';
import {HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsRestServiceImpl implements ProductsRestService {

  constructor(private mock: ProductsRestServiceMock) {}

  get$(): Observable<IProduct[]> {
    return this.mock.get$();
  }

  create$(product): Observable<IProduct> {
    return this.mock.create$(product);
  }
}

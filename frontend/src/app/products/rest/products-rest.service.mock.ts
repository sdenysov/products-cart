import {productsMock} from '@@products/mocks/products.mock';
import {IProduct} from '@@products/models/product';
import {ProductsRestService} from '@@products/rest/products-rest.service';
import {HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsRestServiceMock implements ProductsRestService {

  get$(): Observable<IProduct[]> {
    return of(productsMock);
  }

  create$(product): Observable<IProduct> {
    const id = '' + Math.random().toString(36).substr(2, 9);
    return of({...product, id});
  }
}

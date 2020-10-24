import {IProduct} from '@@products/models/product';
import {ProductsRestServiceImpl} from '@@products/rest/products-rest.service.impl';
import {HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root', useExisting: ProductsRestServiceImpl})
export abstract class ProductsRestService {

  abstract get$(): Observable<IProduct[]>;

  abstract create$(product): Observable<IProduct>;
}

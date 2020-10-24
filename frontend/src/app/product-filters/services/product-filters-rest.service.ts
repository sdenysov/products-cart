import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from '@@products/models/product';
import {ProductFiltersRestServiceImpl} from '@@product-filters/services/product-filters-rest.service.impl';
import {IDictItem} from '@@shared/models/dict-item';

@Injectable({providedIn: 'root', useExisting: ProductFiltersRestServiceImpl})
export abstract class ProductFiltersRestService {

  abstract getCategories$(): Observable<IDictItem[]>;

  abstract suggest$(query: string): Observable<IProduct[]>;

}

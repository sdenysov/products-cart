import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductFiltersRestService} from '@@product-filters/services/product-filters-rest.service';
import {ProductFiltersRestServiceMock} from '@@product-filters/services/product-filters-rest.service.mock';
import {IDictItem} from '@@shared/models/dict-item';

@Injectable({providedIn: 'root'})
export class ProductFiltersRestServiceImpl implements ProductFiltersRestService {

  constructor(private mock: ProductFiltersRestServiceMock) {}

  getCategories$(): Observable<IDictItem[]> {
    return this.mock.getCategories$();
  }

  suggest$(query: string): Observable<any> {
    return this.mock.suggest$(query);
  }

}

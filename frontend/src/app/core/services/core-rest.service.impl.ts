import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductFiltersRestServiceMock} from '@@product-filters/services/product-filters-rest.service.mock';
import {IDictItem} from '@@shared/models/dict-item';
import {CoreRestService} from '@@core/services/core-rest.service';

@Injectable({providedIn: 'root'})
export class CoreRestServiceImpl implements CoreRestService {

  constructor(private mock: ProductFiltersRestServiceMock) {}

  getCategories$(): Observable<IDictItem[]> {
    return this.mock.getCategories$();
  }
}

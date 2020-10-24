import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {productCategoriesMock} from '@@product-filters/mocks/product-categories.mock';
import {IDictItem} from '@@shared/models/dict-item';
import {CoreRestService} from '@@core/services/core-rest.service';

@Injectable({providedIn: 'root'})
export class CoreRestServiceMock implements CoreRestService {

  getCategories$(): Observable<IDictItem[]> {
    return of(productCategoriesMock);
  }
}

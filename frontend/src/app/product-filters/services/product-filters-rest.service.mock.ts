import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';
import {productCategoriesMock} from '@@product-filters/mocks/product-categories.mock';
import {ProductFiltersRestService} from '@@product-filters/services/product-filters-rest.service';
import {IDictItem} from '@@shared/models/dict-item';

@Injectable({providedIn: 'root'})
export class ProductFiltersRestServiceMock implements ProductFiltersRestService {

  getCategories$(): Observable<IDictItem[]> {
    return of(productCategoriesMock);
  }

  suggest$(query: string): Observable<any> {
    switch (query) {
      case 'a':
        return of().pipe(delay(1000));
      case 'ab':
        return of().pipe(delay(2000));
      case 'abc':
        return of().pipe(delay(3000));
      default:
        return of([]);
    }
  }
}

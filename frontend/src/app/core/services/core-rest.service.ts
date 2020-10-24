import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IDictItem} from '@@shared/models/dict-item';
import {CoreRestServiceImpl} from '@@core/services/core-rest.service.impl';

@Injectable({providedIn: 'root', useExisting: CoreRestServiceImpl})
export abstract class CoreRestService {

  abstract getCategories$(): Observable<IDictItem[]>;
}

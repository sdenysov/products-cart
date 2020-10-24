import {DictionariesReduxFacade} from '@@core/store/core-redux.facade';
import {IDictItem} from '@@shared/models/dict-item';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductFiltersRestService} from '@@product-filters/services/product-filters-rest.service';
import {ProductsReduxFacade} from '@@products/store/products-redux.facade';
import {ProductFiltersReduxFacade} from '@@product-filters/store/product-filters-redux.facade';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-filters',
  templateUrl: 'product-filters.component.html',
  styleUrls: ['product-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFiltersComponent implements OnInit {

  public categories$: Observable<IDictItem[]> = this.dictionariesReduxFacade.categories$;
  public searchInputValue: string;

  constructor(private productFiltersRestService: ProductFiltersRestService,
              private productFiltersReduxFacade: ProductFiltersReduxFacade,
              private productsReduxFacade: ProductsReduxFacade,
              private dictionariesReduxFacade: DictionariesReduxFacade) {}

  ngOnInit() {
  }

  selectCategory(categoryCode: string) {
    this.productFiltersReduxFacade.selectCategory(categoryCode);
  }

  search() {
    this.productFiltersReduxFacade.setSearchQuery(this.searchInputValue);
    this.searchInputValue = '';
  }

  resetFilters() {
    this.productFiltersReduxFacade.resetFilters();
  }
}

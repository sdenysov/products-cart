import {IProductFiltersState} from '@@product-filters/models/product-filters-state';
import {IProduct} from '@@products/models/product';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductService {

  filterProducts(products: IProduct[], filters: IProductFiltersState): IProduct[] {
    return products.filter(product => this.filtersMatch(product, filters));
  }

  private filtersMatch(product: IProduct, filters: IProductFiltersState): boolean {
    return this.matchSearchQuery(product, filters) && this.matchCategory(product, filters);
  }

  private matchCategory(product: IProduct, filters: IProductFiltersState): boolean {
    if (filters.selectedCategory) {
      return product.category === filters.selectedCategory;
    }
    return true;
  }

  private matchSearchQuery(product: IProduct, filters: IProductFiltersState): boolean {
    if (filters.searchInputValue) {
      return product.title.toLowerCase().indexOf(filters.searchInputValue.toLowerCase()) > -1;
    }
    return true;
  }
}

import {IProduct} from '@@products/models/product';

export abstract class IProductsCartItem extends IProduct {
  count: number;
  summary: number;
}

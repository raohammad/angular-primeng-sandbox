import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from './product.service';

@Component({
  selector: 'jhi-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.scss'],
})
export class TabularComponent implements OnInit {
  products: Product[] = [];
  height: string = '100%';

  cols: any[] = [];

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => (this.products = data));

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ProductData } from 'src/app/models/ProductData';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductData[] = [];

  constructor(private productService : ProductService) {
  }


  ngOnInit(): void {
    this.productService.GetProducts().subscribe(res => {
      this.products = res;
    })
  }

}

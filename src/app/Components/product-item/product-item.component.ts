import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ProductData } from 'src/app/models/ProductData';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: ProductData;

  constructor(private productService : ProductService) {
    this.product = {
      id: 1,
      name: "",
      nameAr: "",
      price: 0,
      description: "",
      hasAvialableStock: false,
      imageURL: "",
      categories: []
    }   
  }

  Delete(id: number) {
    this.productService.DeleteProducts(id);

    alert("Deleted Successfully")

    location.reload();
  }

  Update(product: ProductData) {
    
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from '../models/ProductData';
import { HttpClient } from '@angular/common/http';
import { ProductPayload } from '../models/ProductPayload';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backendURL = 'https://localhost:7010/api';

  constructor(private http: HttpClient) { }

  GetProducts() : Observable<ProductData[]> {
    return this.http.get<ProductData[]>(this.backendURL + '/Products?pageNumber=1&pageSize=100');
  }

  AddProducts(product: ProductPayload, image: any) {
    const formData = new FormData();

    if (image)
      formData.append('Image', image);

    formData.append('Name', product.Name);
    formData.append('NameAr', product.NameAr);
    formData.append('Price', product.Price.toString());
    formData.append('Description', product.Description);
    formData.append('HasAvailableStock', product.HasAvailableStock ? 'true' : 'false');

    this.http.post(this.backendURL + '/Products', formData)
      .subscribe(res => {

        console.log(res);
      })
  }

  DeleteProducts(id: number) {
    this.http.delete(this.backendURL + '/Products/' + id)
      .subscribe()
  }
}

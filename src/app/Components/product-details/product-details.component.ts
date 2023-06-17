import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductPayload } from 'src/app/models/ProductPayload';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductPayload;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    nameAr: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl(0, [Validators.required]),
    hasAvailableStock: new FormControl(false, [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private router: Router, private productService : ProductService) {
    this.product = {
      Name: "",
      NameAr: "",
      Price: 0,
      Description: "",
      HasAvailableStock: false,
      Categories: []
    }   
  }

  ngOnInit(): void {
    
  }
 
  onSubmit() : void {

    const file = this.myForm.get('fileSource')?.value;

    this.product = {
      Name: this.myForm.get('name')?.value ?? "",
      NameAr: this.myForm.get('nameAr')?.value ?? "",
      Price: this.myForm.get('price')?.value ?? 0,
      Description: this.myForm.get('description')?.value ?? "",
      HasAvailableStock: this.myForm.get('hasAvailableStock')?.value ?? false,
      Categories: []
    }  

    this.productService.AddProducts(this.product, file);

    alert('Added Successfully.');

    location.reload();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  get f(){
    return this.myForm.controls;
  }


}


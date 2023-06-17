import { CategoryData } from 'src/app/models/CategoryData';

export class ProductData {
    id: number;
    name: string;
    nameAr: string;
    description: string;
    price: number;
    imageURL: string;
    hasAvialableStock: boolean;
    categories: CategoryData[];
    
    constructor(id: number, name: string, nameAr: string, price: number, description: string ,imageURL: string, categories: CategoryData[], 
      hasAvialableStock: boolean) {
      this.id = id;
      this.name = name;
      this.nameAr = nameAr;
      this.price = price;
      this.description = description;
      this.imageURL = imageURL;
      this.hasAvialableStock = hasAvialableStock;
      this.categories = categories;
    }
   }
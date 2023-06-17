import { CategoryData } from 'src/app/models/CategoryData';

export class ProductPayload {
    Name: string;
    NameAr: string;
    Description: string;
    Price: number;
    HasAvailableStock: boolean;
    Categories: number[];
    
    constructor(id: number, Name: string, NameAr: string, Price: number, Description: string, categories: number[], 
        HasAvailableStock: boolean) {
      this.Name = Name;
      this.NameAr = NameAr;
      this.Price = Price;
      this.Description = Description;
      this.HasAvailableStock = HasAvailableStock;
      this.Categories = categories;
    }
   }
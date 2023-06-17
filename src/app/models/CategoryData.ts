export class CategoryData {
    name: string;
    parentCategoryName: string

    constructor(name: string, parentCategoryName: string) {
      this.name = name;
      this.parentCategoryName = parentCategoryName;
    }
   }
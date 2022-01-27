import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { categories } from './data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private data!:Category[];

  constructor() { 
    this.data = categories;
  }

  public findById(id:number): Category {
    const category = this.data.find(item => item.id === id);
    if(category === undefined) {
      throw new Error("Category not found");
    } else {
      return category;
    }
  }

  public findAll(): Category[] {
    return this.data;
  }
}

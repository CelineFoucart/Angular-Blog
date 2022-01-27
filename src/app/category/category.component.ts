import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../model/category';
import { Post } from '../model/post';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  category!:Category;
  posts!:Post[];
  notFound:boolean = false;
  
  constructor(
    private categoryService:CategoryService, 
    private route:ActivatedRoute,
    private postService:PostService
  ) { }

  ngOnInit(): void {
    try {
      const id:number = parseInt(this.route.snapshot.params['id']);
      this.category = this.categoryService.findById(id);
      this.posts = this.postService.getByCategory(id);
    } catch (error) {
      this.notFound = true;
    }
  }

}

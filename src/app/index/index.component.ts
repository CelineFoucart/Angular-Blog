import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { Category } from '../model/category';
import { Post } from '../model/post';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';
import { RedirectService } from '../services/redirect.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  posts!:Post[];
  categories!:Category[];
  search!:FormControl;

  constructor(
    private postService:PostService,
    private categoryService:CategoryService,
    private redirect:RedirectService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.getLastThree();
    this.categories = this.categoryService.findAll();
    this.search = new FormControl('', [
      Validators.minLength(3)
    ]);
  }

  onRedirect(id:number):void {
    this.router.navigateByUrl(`/posts/${id}`);
  }

  onSubmit(event:Event) {
    event.preventDefault();
    const url = this.redirect.getUrlWithQueryParams('/search', {q:this.search.value});
    this.router.navigateByUrl(url);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../model/post';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RedirectService } from '../services/redirect.service';

type result = {
  q:string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  posts!:Post[];
  search!:FormControl;
  query!:string;
  success:boolean = true;

  constructor(
    private postService:PostService, 
    private route:ActivatedRoute,
    private router:Router,
    private redirect:RedirectService
  ) { }

  ngOnInit(): void {   
    this.query = this.hydrateQuery();
    if(this.query.length >= 3) {
      this.searchPosts();
      this.success = this.posts.length > 0;
    }
    this.search = new FormControl(this.query, [
      Validators.minLength(3)
    ]);
  }

  onSubmit(event:Event) {
    event.preventDefault();
    this.query = this.search.value;
    const url = this.redirect.getUrlWithQueryParams('/search', {q:this.query});
    if(!this.search.invalid) {
      this.router.navigateByUrl(url);
      this.searchPosts();
      this.success = this.posts.length > 0;
    } else {
      this.router.navigateByUrl(url);
      this.success = false;
    }
  }

  hydrateQuery(): string {
    const query = <BehaviorSubject<result>>this.route.queryParams;
    const result = query.getValue();
    let q = '';
    if(result.hasOwnProperty('q')) {
      q = query.getValue().q;
    }
    return q;
  }

  searchPosts(): void {
    this.posts = this.postService.search(this.query);
  }
}

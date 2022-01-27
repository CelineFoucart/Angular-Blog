import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { posts } from './data';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  data:Post[];

  constructor() {
    this.data = posts;
  }

  public getAll(): Post[] {
    return this.data;
  }

  public getLastThree(): Post[] {
    const lastIndex = this.data.length - 1;
    return this.data.slice(lastIndex - 3, lastIndex);
  }

  public getById(id:number): Post {
    const post = this.data.find(item => item.id === id);
    if(post === undefined) {
      throw new Error("Post not found");
    } else {
      return post;
    }
  }

  public getByCategory(categoryId:number): Post[] {
    const posts:Post[] = [];
    this.data.forEach(post => {
      if(post.category.id === categoryId) {
        posts.push(post);
      }
    });
    return posts;
  }

  public search(query:string): Post[] {
    const posts:Post[] = [];
    this.data.forEach(post => {
      const expreg = new RegExp(query, 'i');
      let success = post.title.search(expreg) !== -1 || 
        post.content.search(expreg) !== -1 || 
        post.excerpt.search(expreg) !== -1;
      if(success) {
        posts.push(post);
      }
    });
    return posts;
  }
}

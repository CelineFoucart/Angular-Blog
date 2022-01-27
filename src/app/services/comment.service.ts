import { Injectable } from '@angular/core';
import { Comment } from '../model/comment';
import { comments } from './data';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  private comments!:Comment[];

  constructor() {
    this.comments = comments;
  }

  public getAll(): Comment[] {
    return this.comments;
  }

  public findCommentByPost(postId:number):Comment[] {
    const comments = this.comments.filter(comment => comment.postId === postId);
    return comments;
  }

  public addComment(pseudo:string, content:string, postId:number): void {
    const commentId = this.comments[this.comments.length - 1].id + 1;
    const comment:Comment = {
      id:commentId,
      author:pseudo,
      postId:postId,
      content:content,
      date: new Date()
    };
    this.comments.push(comment); 
  }
}

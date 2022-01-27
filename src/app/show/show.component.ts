import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../model/comment';
import { Post } from '../model/post';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  
  @Input() post!:Post;
  @Input() withComment:boolean = true;
  notFound:boolean = false;
  totalComments:number = 0;

  constructor(
    private postService:PostService, 
    private route:ActivatedRoute,
    private commentService:CommentService
  ) { }

  ngOnInit(): void {
    if(this.post === undefined) {
      const id:number = parseInt(this.route.snapshot.params['id']);
      try {
        this.post = this.postService.getById(id);
        if(this.withComment) {
          this.post.comments = this.getComments();
          this.totalComments = this.post.comments.length;
        }
      } catch (error) {
        this.notFound = true;
      }
    }
  }

  private getComments(): Comment[] {
    return this.commentService.findCommentByPost(this.post.id);
  }

}

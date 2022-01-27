import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() postId!:number;
  pseudo!:FormControl;
  content!:FormControl;
  submit:boolean = false;
  invalid:boolean = false;

  constructor(private commentService: CommentService, private router:Router) {}

  ngOnInit(): void {
    this.pseudo = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);
  }

  onSubmit(event:Event): void {
    event.preventDefault();
    this.submit = true;
    if(!(this.pseudo.invalid && this.content.invalid)) {
      this.commentService.addComment(this.pseudo.value, this.content.value, this.postId);
      this.invalid = false;
      this.router.routeReuseStrategy.shouldReuseRoute = function() { return false; };
      let newRouterLink = '/posts/' + this.postId;
      this.router.navigate(['/']).then(() => { this.router.navigate([newRouterLink ]); })
    } else {
      this.invalid = true;
    }
  }

}

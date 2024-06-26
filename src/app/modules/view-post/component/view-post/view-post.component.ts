import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../../../intefaces/post.interface';
import { PostService } from '../../../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss',
})
export class ViewPostComponent implements OnInit {
  postForm!: FormGroup;
  @Input() task = '';
  @Input() post: IPost | null = null;

  constructor(
    private postService: PostService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initializeForm();
    console.log(this.post);
  }

  submit() {
    if (this.task === 'create') {
      const postForm: IPost = { ...this.postForm.value, date: new Date() };
      this.postService.createPost(postForm).subscribe((response) => {
        this.postForm.reset();
        this.router.navigate(['post', response.name]);
      });
    }
    if (this.task === 'edit') {
      const postForm: IPost = {
        ...this.postForm.value,
        date: new Date(),
        id: this.post?.id,
      };
      this.postService.updatePost(postForm).subscribe((response) => {
        this.router.navigate(['']);
      });
      this.postForm.reset();
    }
  }

  initializeForm() {
    this.postForm = new FormGroup({
      image: new FormControl(this.post?.image, [Validators.required]),
      author: new FormControl(this.post?.author, [Validators.required]),
      title: new FormControl(this.post?.title, [Validators.required]),
      text: new FormControl(this.post?.text, [Validators.required]),
      category: new FormControl(this.post?.category, [Validators.required]),
    });
  }

  deletePost() {
    if (!(this.post?.id === undefined) && this.task === 'edit') {
      this.postService.deletePost(this.post.id).subscribe((response) => {
        this.router.navigate(['']);
      });
    }
  }
}

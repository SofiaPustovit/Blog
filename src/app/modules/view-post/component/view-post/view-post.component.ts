import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../../../intefaces/post.interface';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss',
})
export class ViewPostComponent implements OnInit {
  postForm!: FormGroup;
  @Input() task = '';
  @Input() post: IPost | null = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.initializeForm();
    console.log(this.post);
  }

  submit() {
    const postForm: IPost = { ...this.postForm.value, date: new Date() };
    if (this.task === 'create') {
      this.postService.createPost(postForm).subscribe((response) => {
        this.postForm.reset();
      });
    }
    if (this.task === 'edit') {
      this.postService.updatePost(postForm).subscribe((response) => {
        console.log(response);
      });
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
}

import { Component, NgModule, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { IPost } from '../../../../intefaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  posts: IPost[] = [];
  isLoading = false;
  isNothing = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.initializePost();
  }

  initializePost() {
    this.isLoading = true;
    this.isContent();
    this.postService.getAllPost().subscribe(
      (response) => {
        this.isLoading = false;
        this.posts = response;
      },
      (error) => {
        this.isLoading = false;
      },
    );
  }

  protected readonly isFinite = isFinite;

  isContent() {
    if (this.posts.length > 0) {
      return (this.isNothing = true);
    } else {
      return (this.isNothing = false);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IPost } from '../../../../intefaces/post.interface';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.scss',
})
export class DetailsPostComponent implements OnInit {
  posts: IPost[] = [];
  post$!: Observable<IPost>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.post$ = this.route.params.pipe(
        switchMap((params: Params) => {
          return this.postService.getById(params['id']);
        }),
      );
      this.postService.getAllPost().subscribe((responce) => {
        this.posts = responce;
      });
    });
  }
}

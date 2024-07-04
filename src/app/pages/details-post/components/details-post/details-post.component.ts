import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IPost } from '../../../../intefaces/post.interface';
import { AuthService } from '../../../../services/auth.service';
import { error } from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.scss',
})
export class DetailsPostComponent implements OnInit {
  posts: IPost[] = [];
  post$!: Observable<IPost>;
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    protected authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.post$ = this.route.params.pipe(
        switchMap((params: Params) => {
          return this.postService.getById(params['id']);
        }),
      );

      this.postService.getAllPost().subscribe((responce) => {
        this.posts = responce.filter((post) => post.id !== params['id']);
        this.isLoading = false;
      });
    });
  }
}

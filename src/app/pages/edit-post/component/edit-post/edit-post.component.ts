import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IPost } from '../../../../intefaces/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss',
})
export class EditPostComponent implements OnInit {
  post!: IPost;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.postService.getById(params['id']);
        }),
      )
      .subscribe((res) => {
        this.post = res;
      });
  }
}

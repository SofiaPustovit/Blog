import { Component, Input } from '@angular/core';
import { IPost } from '../../../../intefaces/post.interface';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: IPost;
  constructor(protected authService: AuthService) {}
}

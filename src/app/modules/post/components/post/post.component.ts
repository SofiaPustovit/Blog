import {Component, Input} from '@angular/core';
import {IPost} from "../../../../intefaces/post";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post!: IPost;
}

import {Component, NgModule, OnInit} from '@angular/core';
import {PostService} from "../../../../services/post.service";
import {IPost} from "../../../../intefaces/post.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

    posts: IPost[] = [];

    constructor(private postService: PostService) {

    }

    ngOnInit(){
      this.initializePost()
    }

    initializePost(){
      this.postService.getAllPost().subscribe(response=>{
        this.posts = response;
      })


    }
}

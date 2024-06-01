import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IPost} from "../../../../intefaces/post.interface";
import {PostService} from "../../../../services/post.service";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent implements OnInit{

  postForm!: FormGroup;
  constructor(private postService: PostService) {

  }

  ngOnInit(){
    this.initializeForm()
  }

  submit(){
    let postForm:IPost ={...this.postForm.value, date: new Date()};
    console.log(postForm)

    this.postService.createPost(postForm).subscribe(response=>{
      console.log(response)
    })

  }

  initializeForm(){
    this.postForm = new FormGroup(
      {
        image: new FormControl(null, [Validators.required]),
        author: new FormControl(null, [Validators.required]),
        title: new FormControl(null, [Validators.required]),
        text: new FormControl(null, [Validators.required]),
        category: new FormControl(null, [Validators.required]),
    })
  }



}

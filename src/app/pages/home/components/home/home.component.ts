import {Component, NgModule} from '@angular/core';
import {postData} from "../../../../data/post-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    protected readonly postData = postData;
}

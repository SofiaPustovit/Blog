import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderModule} from "./modules/header/header.module";
import {FooterModule} from "./modules/footer/footer.module";
import {PostModule} from "./modules/post/post.module";
import { HttpClientModule} from "@angular/common/http";
import {QuillEditorComponent, QuillModule} from "ngx-quill";






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, HeaderModule, FooterModule, PostModule, QuillEditorComponent],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {

}

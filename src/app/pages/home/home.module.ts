import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { PostModule } from '../../modules/post/post.module';
import { PostService } from '../../services/post.service';
import { LoaderComponent } from '../../modules/loader/components/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    PostModule,
    LoaderComponent,
  ],
  declarations: [HomeComponent],
  providers: [PostService],
})
export class HomeModule {}

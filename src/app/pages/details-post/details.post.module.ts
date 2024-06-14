import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPostComponent } from './components/details-post/details-post.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterModule.forChild([{ path: '', component: DetailsPostComponent }]),
  ],
  declarations: [DetailsPostComponent],
  exports: [DetailsPostComponent],
})
export class DetailsPostModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import { FooterModule } from '../footer/footer.module';
import { DetailsPostModule } from '../../pages/details-post/details.post.module';

@NgModule({
  imports: [CommonModule, RouterLink, FooterModule, DetailsPostModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [AuthService],
})
export class HeaderModule {}

import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  blackMode: boolean = false;

  constructor(protected authService: AuthService) {}

  logOff() {
    this.authService.logout();
  }

  isMode() {
    this.blackMode = !this.blackMode;
  }
}

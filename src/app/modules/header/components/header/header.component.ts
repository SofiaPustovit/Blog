import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { LayoutService } from '../../../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  blackMode: boolean = false;

  ngOnInit(): void {
    document.body.setAttribute(
      this.layoutService.themeKey,
      this.layoutService.getTheme(),
    );
    if (this.layoutService.getTheme() === this.layoutService.themeDark) {
      this.blackMode = true;
    }
  }

  constructor(
    protected authService: AuthService,
    private layoutService: LayoutService,
  ) {}

  logOff() {
    this.authService.logout();
  }

  isMode() {
    this.blackMode = !this.blackMode;
    this.layoutService.toggleTheme();
  }
}

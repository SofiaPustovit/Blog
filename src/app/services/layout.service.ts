import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
  themeKey: string = 'theme';
  themeLight: string = 'light';
  themeDark: string = 'dark';

  getTheme() {
    return localStorage.getItem(this.themeKey) || this.themeLight;
  }

  setTheme(theme: string): void {
    return localStorage.setItem(this.themeKey, theme);
  }

  toggleTheme() {
    const actualTheme = this.getTheme();
    let newTheme = '';
    if (actualTheme === this.themeDark) {
      newTheme = this.themeLight;
    } else {
      newTheme = this.themeDark;
    }
    this.setTheme(newTheme);
    document.body.setAttribute(this.themeKey, newTheme);
  }
}

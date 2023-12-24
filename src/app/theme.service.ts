import { Injectable } from '@angular/core';
import { LIGHT_THEME_IMAGE_PATH, DARK_THEME_IMAGE_PATH } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme: boolean;

  constructor() {
    this.isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.updateTheme();
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
  }

  private updateTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  getIsDarkTheme(): boolean {
    return this.isDarkTheme;
  }

  getCurrentThemeImage(): string {
    return this.isDarkTheme ? LIGHT_THEME_IMAGE_PATH : DARK_THEME_IMAGE_PATH;
  }
}

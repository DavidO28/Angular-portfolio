import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  themeImage: string = "";

  constructor(private themeService: ThemeService) {
    this.updateThemeImage();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.updateThemeImage();
  }

  private updateThemeImage() {
    this.themeImage = this.themeService.getCurrentThemeImage();
  }


}

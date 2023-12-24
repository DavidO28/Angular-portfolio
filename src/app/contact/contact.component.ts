import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    const isDarkTheme = this.themeService.getIsDarkTheme();
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

}

import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    const isDarkTheme = this.themeService.getIsDarkTheme();
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

  Skillimages: { image: string }[] = [
    {
      image: "assets/education-images/html.png"
    },
    {
      image: "assets/education-images/css.svg"
    },
    {
      image: "assets/education-images/js.webp"
    },
    {
      image: "assets/education-images/ts.png"
    },
    {
      image: "assets/education-images/booststrap.webp"
    },
    {
      image: "assets/education-images/github.png"
    },
    {
      image: "assets/education-images/wordpress.png"
    },
    {
      image: "assets/education-images/angular.svg"
    },
    {
      image: "assets/education-images/react.png"
    },
  ]

}

import { Component, Input } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    const isDarkTheme = this.themeService.getIsDarkTheme();
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

  projects: { name: string; Codelink: string; Livelink: string; img: string }[] = [
    { name: 'Weather', Codelink: 'https://github.com/DavidO28/weather-app/tree/main/src', Livelink: 'https://davido28.github.io/weather-app/', img: 'assets/project-images/weather.png' },
    { name: 'To do list', Codelink: 'https://github.com/DavidO28/to-do-list/tree/main/src', Livelink: 'https://davido28.github.io/to-do-list', img: 'assets/project-images/todo.png' },
    { name: 'Quiz', Codelink: 'https://github.com/DavidO28/millionaire-quiz/tree/main/src', Livelink: 'https://davido28.github.io/millionaire-quiz', img: 'assets/project-images/quiz.png' },
    { name: 'Personal site', Codelink: 'https://github.com/DavidO28/Personal-website/tree/main/src', Livelink: 'https://davido28.github.io/Personal-website', img: 'assets/project-images/personal.png' },
    { name: 'Rating', Codelink: 'https://github.com/DavidO28/interactive-rating/tree/main/src', Livelink: 'https://davido28.github.io/interactive-rating/', img: 'assets/project-images/rating.png' },
    { name: 'Unilab', Codelink: 'https://github.com/DavidO28/unilab-project/tree/master/src', Livelink: 'https://davido28.github.io/unilab-project/', img: 'assets/project-images/unilab.png' },
    { name: 'ANG calc', Codelink: 'https://github.com/DavidO28/angular-calculator/tree/main/src', Livelink: 'https://davido28.github.io/angular-calculator/', img: 'assets/project-images/calc.png' },
    { name: 'ANG Page', Codelink: 'https://github.com/DavidO28/angular-profile-page/tree/main/src', Livelink: 'https://davido28.github.io/angular-profile-page/', img: 'assets/project-images/angpage.png' },
    { name: 'Poshtravel.ge', Codelink: 'https://github.com/DavidO28/poshtravel.ge', Livelink: 'https://poshtravel.ge', img: 'assets/project-images/poshtravel.png' },
    { name: 'Sweeft', Codelink: 'https://github.com/DavidO28/sweeftDigital-project/tree/main/src', Livelink: 'https://davido28.github.io/sweeftDigital-project/', img: 'assets/project-images/sweeft.png' },
  ];

}

import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
} from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    const isDarkTheme = this.themeService.getIsDarkTheme();
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

  id = "tsparticles";
  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.5,
        },
      },
    },
    particles: {
      color: {
        value: "#727272",
      },
      links: {
        color: "#727272",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: any): void {
    console.log(container);
  }

  async particlesInit(engine: any): Promise<void> {
    await loadSlim(engine);
  }

}

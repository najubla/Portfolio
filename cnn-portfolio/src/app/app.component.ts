import { Component } from '@angular/core';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PROJECTS } from './data/projects';
import { NgIf, NgFor } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, ProjectCardComponent],
  template: `
    <main class="container">
      <nav class="navbar">
        <div class="navbar-left">
          <span class="logo"></span>
        </div>
        <div class="navbar-right">
          <a href="https://www.kaggle.com/najubla">Kaggle</a>
          <a href="https://github.com/najubla">GitHub</a>
          <a href="https://x.com/najubla">X</a>
        </div>
      </nav>
      <h1>Projects</h1>
      <p class="subtitle">My public portfolio includes projects focused on Machine Learning and Deep Learning applied.</p>

      <section *ngIf="projects.length > 0; else empty">
        <app-project-card *ngFor="let p of projects" [project]="p" />
      </section>

      <ng-template #empty>
        <p class="empty-message">Todavía no hay proyectos subidos.</p>
      </ng-template>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects = PROJECTS;
}

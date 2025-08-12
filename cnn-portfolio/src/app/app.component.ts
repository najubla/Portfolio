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
          <span class="logo">Juan Ramírez</span>
        </div>
        <div class="navbar-right">
          <a href="#">Blog</a>
          <a href="#">GitHub</a>
          <a href="#">CV</a>
        </div>
      </nav>
      <h1>Projects</h1>
      <p class="subtitle">My public portfolio includes deep learning projects focused on Convolutional Neural Networks (CNNs) applied to computer vision tasks.
To explore more, visit my GitHub, check the About page, or download my CV.</p>

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

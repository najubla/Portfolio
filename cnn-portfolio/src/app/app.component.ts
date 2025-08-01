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
      <h1>Juan's CNN Portfolio</h1>
      <p class="subtitle">Deep Learning / Computer Vision</p>

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

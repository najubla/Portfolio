import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Section = { id: string; label: string };
type Project = { section: string; title: string; desc: string; tags: string[]; link: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="site-header">
      <div class="container nav">
        <a></a>
        <button class="theme-btn" (click)="toggleTheme()" [attr.aria-label]="'Switch to ' + (theme==='light' ? 'dark' : 'light') + ' theme'">
          <span *ngIf="theme==='light'">Dark</span>
          <span *ngIf="theme==='dark'">Light</span>
        </button>
      </div>
    </header>

    <main class="container">
      <!-- ÚNICA DESCRIPCIÓN -->
      <section class="section hero">
        <h1>Machine Learning Portfolio</h1>
        <p class="muted">
        Machine learning projects and notes.
        </p>
      </section>

      
      <nav class="sections-bar" aria-label="Sections">
        <ul class="sections">
          <li *ngFor="let s of sections">
            <a [href]="'#' + s.id">{{ s.label }}</a>
          </li>
        </ul>
      </nav>

      
      <section class="section" *ngFor="let s of sections" [attr.id]="s.id">
        <h2>{{ s.label }}</h2>

        <ng-container *ngIf="getBySection(s.id).length > 0; else emptySection">
          <div class="grid">
            <article class="card" *ngFor="let p of getBySection(s.id)">
              <h3>{{ p.title }}</h3>
              <p class="muted">{{ p.desc }}</p>
              <div class="tags">
                <span class="tag" *ngFor="let t of p.tags">{{ t }}</span>
              </div>
              <a class="more" [href]="p.link" target="_blank" rel="noopener">Repository →</a>
            </article>
          </div>
        </ng-container>

        <ng-template #emptySection>
          <div class="empty card" role="status" aria-live="polite">
            <h3>Coming soon</h3>
            <p class="muted">This section is being updated.</p>
          </div>
        </ng-template>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  year = new Date().getFullYear();
  theme: 'light' | 'dark' = 'light';

  sections: Section[] = [
    { id: 'cnn',     label: 'CNN' },
    { id: 'nlp',     label: 'NLP' },
    { id: 'gnn',     label: 'GNN' },
    { id: 'classic', label: 'Classical ML' }
  ];

  projects: Project[] = [
    ];

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    this.setTheme(saved === 'dark' ? 'dark' : 'light'); // claro por defecto
  }

  toggleTheme() {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light');
  }

  private setTheme(t: 'light' | 'dark') {
    this.theme = t;
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  }

  getBySection(id: string) {
    return this.projects.filter(p => p.section === id);
  }
}

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, delay } from 'rxjs';
import { Technology } from '@models/technology.model';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = './data/prompts.json';

  private readonly _isLoading = signal(false);
  readonly isLoading = this._isLoading.asReadonly();

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  getTechnologies(): Observable<Technology[]> {
    this._isLoading.set(true);
    this._error.set(null);

    return this.http.get<Technology[]>(this.dataUrl).pipe(
      delay(300),
      map((data) => {
        this._isLoading.set(false);
        return Array.isArray(data) ? data : [];
      }),
      catchError((error) => {
        this._isLoading.set(false);
        this._error.set('Failed to load technologies. Please try again.');
        console.error('Error loading technologies:', error);
        return of(this.getMockData());
      })
    );
  }

  private getMockData(): Technology[] {
    return [
      {
        id: 'github-copilot',
        environment: 'GitHub Copilot',
        type: 'AI/ML',
        rulesFile: 'copilot-instructions.md',
        installationInstructions: 'Configure .github/copilot-instructions.md',
        description: 'AI pair programmer for faster coding',
        link: 'https://github.com/PeterM45/ai-instructions/blob/main/instructions/github-copilot/copilot-instructions.md',
        lastUpdated: '2025-01-19',
        contributors: ['github-user'],
      },
      {
        id: 'angular',
        environment: 'Angular',
        type: 'Framework',
        rulesFile: 'angular-guidelines.md',
        installationInstructions: 'Add to your Angular project',
        description: 'Modern web framework with TypeScript',
        link: 'https://github.com/PeterM45/ai-instructions/blob/main/instructions/angular/angular-guidelines.md',
        lastUpdated: '2025-01-19',
        contributors: ['angular-dev'],
      },
      {
        id: 'vscode',
        environment: 'VS Code',
        type: 'IDE',
        rulesFile: 'vscode-setup.md',
        installationInstructions: 'Install extensions and configure settings',
        description: 'Popular code editor with AI extensions',
        link: 'https://github.com/PeterM45/ai-instructions/blob/main/instructions/vscode/vscode-setup.md',
        lastUpdated: '2025-01-19',
        contributors: ['vscode-user'],
      },
    ];
  }
}

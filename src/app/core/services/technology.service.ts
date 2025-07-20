import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, delay } from 'rxjs';
import { Technology } from '@models/technology.model';
import { APP_CONFIG } from '@shared/constants/app.constants';

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
        id: 'angular',
        environment: 'Angular',
        type: 'Framework',
        rulesFile: 'ai.md',
        installationInstructions: 'Copy to your AI configuration file',
        description: 'Modern web framework with TypeScript and signals',
        logo: 'https://angular.dev/assets/images/logos/angular/angular.svg',
        logoAlt: 'Angular Logo',
        link: 'https://github.com/PeterM45/ai-instructions/blob/main/instructions/angular/ai.md',
        lastUpdated: '2025-01-19',
        contributors: ['angular-team'],
      },
      {
        id: 'react',
        environment: 'React',
        type: 'Framework',
        rulesFile: 'ai.md',
        installationInstructions: 'Copy to your AI configuration file',
        description: 'Popular JavaScript library for building user interfaces',
        logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
        logoAlt: 'React Logo',
        link: 'https://github.com/PeterM45/ai-instructions/blob/main/instructions/react/ai.md',
        lastUpdated: '2025-01-19',
        contributors: ['react-community'],
      },
      {
        id: 'typescript',
        environment: 'TypeScript',
        type: 'Language',
        rulesFile: 'ai.md',
        installationInstructions: 'Copy to your AI configuration file',
        description: 'Typed superset of JavaScript for better development',
        logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
        logoAlt: 'TypeScript Logo',
        link: 'https://github.com/PeterM45/ai-instructions/blob/main/instructions/typescript/ai.md',
        lastUpdated: '2025-01-19',
        contributors: ['typescript-team'],
      },
    ];
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Technology } from '@models/technology.model';

@Injectable({
  providedIn: 'root',
})
export class FileBasedTechnologyService {
  private readonly http = inject(HttpClient);

  getTechnologies(): Observable<Technology[]> {
    return this.http
      .get<{ directories: string[] }>('./data/technology-list.json')
      .pipe(
        map(({ directories }) => this.generateTechnologies(directories)),
        catchError(() => of(this.getDefaultTechnologies()))
      );
  }

  private generateTechnologies(directories: string[]): Technology[] {
    return directories.map((dir) => this.createTechnology(dir));
  }

  private createTechnology(directory: string): Technology {
    const mapping = this.getTechnologyMapping();
    const tech = mapping[directory] || this.getDefaultTechnology(directory);

    return {
      id: directory,
      environment: tech.environment!,
      type: tech.type!,
      rulesFile: 'ai.md',
      installationInstructions: 'Copy to your AI configuration file',
      description: tech.description,
      link: `https://github.com/PeterM45/ai-instructions/blob/main/instructions/${directory}/ai.md`,
      logo: this.getLogoUrl(tech.iconSlug || directory),
      logoAlt: `${tech.environment} Logo`,
      lastUpdated: tech.lastUpdated,
      contributors: tech.contributors,
    };
  }

  private getTechnologyMapping(): Record<
    string,
    Partial<Technology> & { iconSlug: string }
  > {
    return {
      angular: {
        environment: 'Angular',
        type: 'Framework',
        description: 'Modern web framework with TypeScript and signals',
        iconSlug: 'angular',
        lastUpdated: '2025-01-19',
        contributors: ['angular-team'],
      },
    };
  }

  private getDefaultTechnology(
    directory: string
  ): Partial<Technology> & { iconSlug: string } {
    return {
      environment: this.formatName(directory),
      type: 'Tool',
      description: `${this.formatName(directory)} AI configuration`,
      iconSlug: directory,
      lastUpdated: new Date().toISOString().split('T')[0],
      contributors: [],
    };
  }

  private formatName(directory: string): string {
    return directory
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private getLogoUrl(iconSlug: string): string {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconSlug}.svg`;
  }

  private getDefaultTechnologies(): Technology[] {
    return this.generateTechnologies(['angular']);
  }
}

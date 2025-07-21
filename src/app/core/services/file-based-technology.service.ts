import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Technology } from '@models/technology.model';
import * as simpleIcons from 'simple-icons';

@Injectable({
  providedIn: 'root',
})
export class FileBasedTechnologyService {
  private readonly http = inject(HttpClient);

  getTechnologies(): Observable<Technology[]> {
    return this.http
      .get<{ technologies: any[] }>('./data/technology-list.json')
      .pipe(
        map(({ technologies }) => this.generateTechnologies(technologies)),
        catchError(() => of([]))
      );
  }

  private generateTechnologies(technologies: any[]): Technology[] {
    return technologies.map((tech) => this.createTechnology(tech));
  }

  private formatName(directory: string): string {
    return directory
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private getSimpleIcon(iconSlug: string): { url: string; hex: string } {
    try {
      // Simple Icons uses PascalCase keys, e.g. siAngular, siReact, siVuedotjs
      const pascal =
        'si' + iconSlug.replace(/(^|[-.])(\w)/g, (_, __, c) => c.toUpperCase());
      const icon = (simpleIcons as any)[pascal];
      if (icon) {
        const svgContent = `<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#${icon.hex}\"><path d=\"${icon.path}\"/></svg>`;
        return {
          url: `data:image/svg+xml;base64,${btoa(svgContent)}`,
          hex: icon.hex,
        };
      }
    } catch {}
    // fallback
    const fallbackSvg = `<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#6366f1\"><circle cx=\"12\" cy=\"12\" r=\"10\"/></svg>`;
    return {
      url: `data:image/svg+xml;base64,${btoa(fallbackSvg)}`,
      hex: '6366f1',
    };
  }

  private createTechnology(tech: any): Technology {
    const id = tech.id;
    const iconSlug = id.toLowerCase();
    const iconData = this.getSimpleIcon(iconSlug);
    const environment = this.formatName(id);
    return {
      id,
      environment,
      type: tech.type || 'Tool',
      rulesFile: 'ai.md',
      installationInstructions: 'Copy to your AI configuration file',
      description: tech.description || `${environment} AI configuration`,
      link: `https://github.com/PeterM45/ai-instructions/blob/main/instructions/${id}/ai.md`,
      logo: iconData.url,
      logoAlt: `${environment} Logo`,
      lastUpdated: tech.lastUpdated || new Date().toISOString().split('T')[0],
      contributors: tech.contributors || [],
      resources: tech.resources || [],
      isVerified: !!tech.isVerified,
    };
  }
}

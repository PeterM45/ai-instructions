import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAngularModule, ChevronUp, ChevronDown } from 'lucide-angular';
import { siGithubcopilot, siWindsurf, siMarkdown } from 'simple-icons';

export interface ConfigurationStep {
  id: string;
  title: string;
  description: string;
  icon: any;
  steps: string[];
}

@Component({
  selector: 'app-configuration-guide',
  templateUrl: './configuration-guide.component.html',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationGuideComponent {
  getIconDataUrl(icon: any): string | null {
    if (!icon) return null;
    const fillColor = '#fff';
    const svgContent = `<svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='${fillColor}'><path d='${icon.path}'/></svg>`;
    return `data:image/svg+xml;base64,${btoa(svgContent)}`;
  }
  readonly siGithubcopilot = siGithubcopilot;
  readonly siWindsurf = siWindsurf;
  readonly siMarkdown = siMarkdown;

  readonly ChevronUp = ChevronUp;
  readonly ChevronDown = ChevronDown;

  protected readonly isExpanded = signal(false);

  toggleExpanded(): void {
    this.isExpanded.update((expanded) => !expanded);
  }

  readonly configurationSteps: ConfigurationStep[] = [
    {
      id: 'copilot',
      title: 'GitHub Copilot',
      description:
        'Configure instructions for GitHub Copilot in your repository',
      icon: this.siGithubcopilot,
      steps: [
        'Create .github/copilot-instructions.md',
        'Copy the relevant instructions',
        'Commit and push to your repository',
      ],
    },
    {
      id: 'cursor',
      title: 'Cursor IDE',
      description: 'Set up AI instructions for Cursor editor',
      icon: 'https://cursor.com/assets/images/logo.svg',
      steps: [
        'Create .cursorrules file in project root',
        'Paste the instruction content',
        'Rules apply automatically',
      ],
    },
    {
      id: 'windsurf',
      title: 'Windsurf',
      description: 'Configure guidelines for Windsurf AI assistant',
      icon: this.siWindsurf,
      steps: [
        'Create guidelines.md file',
        'Add to your project directory',
        'Reference in Windsurf settings',
      ],
    },
    {
      id: 'other',
      title: 'Other IDEs',
      description: 'Universal instructions for any AI-powered editor',
      icon: this.siMarkdown,
      steps: [
        'Create .instructions.md file',
        'Copy relevant guidelines',
        'Configure in your editor settings',
      ],
    },
  ];
}

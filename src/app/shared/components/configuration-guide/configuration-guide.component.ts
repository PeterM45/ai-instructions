import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  Copy,
  FileText,
  Settings,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-angular';

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
  readonly Copy = Copy;
  readonly FileText = FileText;
  readonly Settings = Settings;
  readonly Zap = Zap;
  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;

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
      icon: this.Copy,
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
      icon: this.Settings,
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
      icon: this.Zap,
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
      icon: this.FileText,
      steps: [
        'Create .instructions.md file',
        'Copy relevant guidelines',
        'Configure in your editor settings',
      ],
    },
  ];
}

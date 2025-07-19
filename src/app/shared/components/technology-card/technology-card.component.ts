import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Technology, TechnologyType } from '@models/technology.model';
import {
  LucideAngularModule,
  FileText,
  BookOpen,
  Calendar,
  Users,
  Github,
  ExternalLink,
} from 'lucide-angular';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyCardComponent {
  readonly technology = input.required<Technology>();

  // Lucide icons
  readonly FileText = FileText;
  readonly BookOpen = BookOpen;
  readonly Calendar = Calendar;
  readonly Users = Users;
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;

  getTypeClasses(type: TechnologyType): string {
    const baseClasses =
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

    const colorMap: Record<TechnologyType, string> = {
      IDE: 'bg-blue-900/50 text-blue-300 border border-blue-800',
      Framework: 'bg-green-900/50 text-green-300 border border-green-800',
      Tool: 'bg-purple-900/50 text-purple-300 border border-purple-800',
      Platform: 'bg-orange-900/50 text-orange-300 border border-orange-800',
      Database: 'bg-red-900/50 text-red-300 border border-red-800',
      'Cloud Service':
        'bg-indigo-900/50 text-indigo-300 border border-indigo-800',
      'AI/ML': 'bg-pink-900/50 text-pink-300 border border-pink-800',
      Other: 'bg-slate-700 text-slate-300 border border-slate-600',
    };

    return `${baseClasses} ${colorMap[type]}`;
  }

  formatDate(dateString?: string): string {
    if (!dateString) return 'Unknown';

    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  }
}

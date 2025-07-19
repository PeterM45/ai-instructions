import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Technology, TechnologyType } from '@models/technology.model';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyCardComponent {
  readonly technology = input.required<Technology>();

  getTypeClasses(type: TechnologyType): string {
    const baseClasses =
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

    const colorMap: Record<TechnologyType, string> = {
      IDE: 'bg-blue-100 text-blue-800',
      Framework: 'bg-green-100 text-green-800',
      Tool: 'bg-purple-100 text-purple-800',
      Platform: 'bg-orange-100 text-orange-800',
      Database: 'bg-red-100 text-red-800',
      'Cloud Service': 'bg-indigo-100 text-indigo-800',
      'AI/ML': 'bg-pink-100 text-pink-800',
      Other: 'bg-gray-100 text-gray-800',
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

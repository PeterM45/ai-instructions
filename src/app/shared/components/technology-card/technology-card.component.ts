import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Technology } from '@models/technology.model';
import { getTypeClasses, formatDate } from '@shared/utils/technology.utils';
import { LucideAngularModule } from 'lucide-angular';
import {
  FileText,
  BookOpen,
  Calendar,
  Users,
  Github,
  ExternalLink,
  ArrowRight,
} from '@shared/index';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyCardComponent {
  readonly technology = input.required<Technology>();

  readonly FileText = FileText;
  readonly BookOpen = BookOpen;
  readonly Calendar = Calendar;
  readonly Users = Users;
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  readonly ArrowRight = ArrowRight;

  readonly getTypeClasses = getTypeClasses;
  readonly formatDate = formatDate;
}

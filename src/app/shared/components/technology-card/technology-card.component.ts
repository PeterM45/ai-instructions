import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { Technology } from '@models/technology.model';
import { getTypeClasses, formatDate } from '@shared/utils/technology.utils';
import { LucideAngularModule, Check } from 'lucide-angular';
import { Calendar, Users, ExternalLink, ArrowRight } from '@shared/index';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyCardComponent {
  readonly technology = input.required<Technology>();

  // Failsafe signals for expanding contributors/resources
  readonly showAllContrib = signal(false);
  readonly showAllRes = signal(false);

  readonly Calendar = Calendar;
  readonly Users = Users;
  readonly ExternalLink = ExternalLink;
  readonly ArrowRight = ArrowRight;
  readonly Check = Check;

  readonly getTypeClasses = getTypeClasses;
  readonly formatDate = formatDate;
}

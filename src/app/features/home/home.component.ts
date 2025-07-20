import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  OnInit,
} from '@angular/core';
import { Technology, TechnologyType } from '@models/technology.model';
import { FileBasedTechnologyService } from '@core/services/file-based-technology.service';
import { TechnologyCardComponent } from '@shared/components/technology-card/technology-card.component';
import { SearchFilterComponent } from '@shared/components/search-filter/search-filter.component';
import { ConfigurationGuideComponent } from '@shared/components/configuration-guide/configuration-guide.component';
import { APP_CONFIG } from '@shared/constants/app.constants';
import { LucideAngularModule } from 'lucide-angular';
import {
  Database,
  Search,
  Github,
  AlertCircle,
  Loader2,
  Book,
  Plus,
  Star,
} from '@shared/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    TechnologyCardComponent,
    SearchFilterComponent,
    ConfigurationGuideComponent,
    LucideAngularModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly technologyService = inject(FileBasedTechnologyService);

  readonly APP_CONFIG = APP_CONFIG;

  readonly Database = Database;
  readonly Search = Search;
  readonly Github = Github;
  readonly AlertCircle = AlertCircle;
  readonly Loader2 = Loader2;
  readonly Book = Book;
  readonly Plus = Plus;
  readonly Star = Star;

  private readonly _technologies = signal<Technology[]>([]);
  private readonly _searchTerm = signal('');
  private readonly _selectedType = signal<TechnologyType | ''>('');
  private readonly _isLoading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly technologies = this._technologies.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly filteredTechnologies = computed(() => {
    const techs = this.technologies();
    const search = this._searchTerm().toLowerCase();
    const type = this._selectedType();

    return techs.filter((tech) => {
      const matchesSearch =
        !search ||
        tech.environment.toLowerCase().includes(search) ||
        tech.rulesFile.toLowerCase().includes(search) ||
        tech.installationInstructions.toLowerCase().includes(search) ||
        (tech.description && tech.description.toLowerCase().includes(search));

      const matchesType = !type || tech.type === type;

      return matchesSearch && matchesType;
    });
  });

  readonly totalTechnologies = computed(() => this.technologies().length);
  readonly filteredCount = computed(() => this.filteredTechnologies().length);
  readonly typeStats = computed(() => {
    const techs = this.technologies();
    const stats = new Map<TechnologyType, number>();

    techs.forEach((tech) => {
      const current = stats.get(tech.type) || 0;
      stats.set(tech.type, current + 1);
    });

    return Array.from(stats.entries()).map(([type, count]) => ({
      type,
      count,
    }));
  });

  ngOnInit(): void {
    this.loadTechnologies();
  }

  onSearchChange(searchTerm: string): void {
    this._searchTerm.set(searchTerm);
  }

  onTypeChange(type: TechnologyType | ''): void {
    this._selectedType.set(type);
  }

  retryLoading(): void {
    this.loadTechnologies();
  }

  getAngularVersion(): string {
    return APP_CONFIG.ANGULAR_VERSION;
  }

  private loadTechnologies(): void {
    this._isLoading.set(true);
    this._error.set(null);

    this.technologyService.getTechnologies().subscribe({
      next: (technologies) => {
        this._technologies.set(technologies);
        this._isLoading.set(false);
      },
      error: (error) => {
        console.error('Failed to load technologies:', error);
        this._error.set('Failed to load technologies');
        this._isLoading.set(false);
      },
    });
  }
}

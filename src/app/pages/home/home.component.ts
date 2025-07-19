import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Technology, TechnologyType } from '@models/technology.model';
import { TechnologyService } from '@core/services/technology.service';
import { TechnologyCardComponent } from '@shared/components/technology-card/technology-card.component';
import { SearchFilterComponent } from '@shared/components/search-filter/search-filter.component';
import {
  LucideAngularModule,
  Database,
  Search,
  Github,
  AlertCircle,
  Loader2,
  Book,
  Plus,
  Star,
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    HttpClientModule,
    TechnologyCardComponent,
    SearchFilterComponent,
    LucideAngularModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly technologyService = inject(TechnologyService);

  // Lucide icons
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

  readonly technologies = this._technologies.asReadonly();
  readonly isLoading = this.technologyService.isLoading;
  readonly error = this.technologyService.error;

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
    return '20';
  }

  private loadTechnologies(): void {
    this.technologyService.getTechnologies().subscribe({
      next: (technologies) => {
        this._technologies.set(technologies);
      },
      error: (error) => {
        console.error('Failed to load technologies:', error);
      },
    });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechnologyType } from '@models/technology.model';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-filter',
  template: `
    <div
      class="bg-slate-800 rounded-lg shadow-sm border border-slate-700 p-6 mb-6"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2">
          <label
            for="search"
            class="block text-sm font-medium text-slate-200 mb-2"
          >
            Search Technologies
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <lucide-icon
                [img]="Search"
                class="h-5 w-5 text-slate-400"
              ></lucide-icon>
            </div>
            <input
              id="search"
              type="text"
              [ngModel]="searchTerm()"
              (ngModelChange)="updateSearchTerm($event)"
              placeholder="Search by environment, rules file, or description..."
              class="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md leading-5 bg-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:placeholder-slate-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div>
          <label
            for="type-filter"
            class="block text-sm font-medium text-slate-200 mb-2"
          >
            Filter by Type
          </label>
          <select
            id="type-filter"
            [ngModel]="selectedType()"
            (ngModelChange)="updateType($event)"
            class="block w-full px-3 py-2 border border-slate-600 bg-slate-700 text-slate-100 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Types</option>
            @for (type of technologyTypes; track type) {
            <option [value]="type">{{ type }}</option>
            }
          </select>
        </div>
      </div>
    </div>
  `,
  imports: [FormsModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFilterComponent {
  searchChange = output<string>();
  typeChange = output<TechnologyType | ''>();

  // Lucide icons
  readonly Search = Search;

  protected readonly searchTerm = signal('');
  protected readonly selectedType = signal<TechnologyType | ''>('');

  protected readonly technologyTypes: TechnologyType[] = [
    'Framework',
    'IDE',
    'Tool',
    'Platform',
    'Database',
    'Cloud Service',
    'AI/ML',
    'Other',
  ];

  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
    this.searchChange.emit(term);
  }

  updateType(type: TechnologyType | ''): void {
    this.selectedType.set(type);
    this.typeChange.emit(type);
  }
}

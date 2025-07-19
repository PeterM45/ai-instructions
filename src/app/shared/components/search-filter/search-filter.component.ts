import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechnologyType } from '@models/technology.model';

@Component({
  selector: 'app-search-filter',
  template: `
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2">
          <label
            for="search"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Search Technologies
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              id="search"
              type="text"
              [ngModel]="searchTerm()"
              (ngModelChange)="updateSearchTerm($event)"
              placeholder="Search by environment, rules file, or description..."
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div>
          <label
            for="type-filter"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Filter by Type
          </label>
          <select
            id="type-filter"
            [ngModel]="selectedType()"
            (ngModelChange)="updateType($event)"
            class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
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
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFilterComponent {
  searchChange = output<string>();
  typeChange = output<TechnologyType | ''>();

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

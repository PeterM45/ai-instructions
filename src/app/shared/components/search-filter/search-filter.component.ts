import {
  ChangeDetectionStrategy,
  Component,
  output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TechnologyType } from '@models/technology.model';
import { TECHNOLOGY_TYPES } from '@shared/constants/app.constants';
import { LucideAngularModule } from 'lucide-angular';
import { Search } from '@shared/index';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  imports: [ReactiveFormsModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  searchChange = output<string>();
  typeChange = output<TechnologyType | ''>();

  private readonly destroy$ = new Subject<void>();

  readonly Search = Search;

  protected readonly technologyTypes = TECHNOLOGY_TYPES;

  protected readonly searchForm = new FormGroup({
    search: new FormControl(''),
    type: new FormControl<TechnologyType | ''>(''),
  });

  ngOnInit(): void {
    this.searchForm.controls.search.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.searchChange.emit(value || '');
      });

    this.searchForm.controls.type.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.typeChange.emit(value || '');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

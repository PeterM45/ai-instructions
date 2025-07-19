# Angular AI Development Guidelines

You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Do NOT set `standalone: true` inside the `@Component`, `@Directive` and `@Pipe` decorators
- Use signals for state management
- Implement lazy loading for feature routes
- Use `NgOptimizedImage` for all static images
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- DO NOT use `ngStyle`, use `style` bindings instead

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Example Component Structure

```typescript
import { ChangeDetectionStrategy, Component, computed, input, output, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

interface User {
  id: string;
  name: string;
  email: string;
}

@Component({
  selector: "app-user-card",
  template: `
    <div class="user-card" [class.active]="isActive()">
      <h3>{{ user().name }}</h3>
      <p>{{ user().email }}</p>
      @if (showDetails()) {
      <div class="details">
        <p>User ID: {{ user().id }}</p>
      </div>
      }
      <button (click)="handleClick()" [disabled]="isLoading()">
        {{ buttonText() }}
      </button>
    </div>
  `,
  styles: [
    `
      .user-card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .user-card.active {
        border-color: #007acc;
      }
    `,
  ],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  // Inputs using the new input() function
  user = input.required<User>();
  showDetails = input(false);

  // Outputs using the new output() function
  userClick = output<User>();

  // Local state with signals
  protected readonly isLoading = signal(false);

  // Computed values
  protected readonly isActive = computed(() => this.user().id === "active-user");
  protected readonly buttonText = computed(() => (this.isLoading() ? "Loading..." : "View Profile"));

  protected handleClick(): void {
    this.isLoading.set(true);

    // Simulate async operation
    setTimeout(() => {
      this.userClick.emit(this.user());
      this.isLoading.set(false);
    }, 1000);
  }
}
```

## Service Example

```typescript
import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, catchError, of } from "rxjs";

export interface ApiResponse<T> {
  data: T;
  success: boolean;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = "https://api.example.com";

  // Signal-based state
  private readonly _users = signal<User[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  // Public readonly signals
  readonly users = this._users.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  loadUsers(): Observable<User[]> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.get<ApiResponse<User[]>>(`${this.baseUrl}/users`).pipe(
      map((response) => {
        this._users.set(response.data);
        this._loading.set(false);
        return response.data;
      }),
      catchError((error) => {
        this._error.set("Failed to load users");
        this._loading.set(false);
        return of([]);
      })
    );
  }

  addUser(user: Omit<User, "id">): Observable<User> {
    return this.http.post<ApiResponse<User>>(`${this.baseUrl}/users`, user).pipe(
      map((response) => {
        this._users.update((users) => [...users, response.data]);
        return response.data;
      })
    );
  }
}
```

## Routing with Lazy Loading

```typescript
// app.routes.ts
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    loadComponent: () => import("./dashboard/dashboard.component").then((m) => m.DashboardComponent),
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.routes").then((m) => m.userRoutes),
  },
  {
    path: "**",
    loadComponent: () => import("./not-found/not-found.component").then((m) => m.NotFoundComponent),
  },
];
```

## Modern Angular Project Structure (2025)

```
src/
├── app/
│   ├── core/                 # Singleton services, guards, interceptors
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── services/
│   ├── shared/               # Reusable components, pipes, directives
│   │   ├── components/
│   │   ├── pipes/
│   │   ├── directives/
│   │   └── utils/
│   ├── features/             # Feature modules (lazy loaded)
│   │   ├── dashboard/
│   │   ├── users/
│   │   └── settings/
│   ├── layout/               # Layout components
│   │   ├── header/
│   │   ├── sidebar/
│   │   └── footer/
│   ├── models/               # TypeScript interfaces and types
│   ├── app.config.ts         # App configuration
│   ├── app.routes.ts         # Route configuration
│   └── app.component.ts      # Root component
├── assets/                   # Static assets
├── environments/             # Environment configurations
└── styles/                   # Global styles
```

## Key Points for AI Development

1. **Always use signals** for reactive state management instead of BehaviorSubject or manual change detection
2. **Prefer standalone components** over NgModules for better tree-shaking and simpler architecture
3. **Use the inject() function** instead of constructor dependency injection for cleaner code
4. **Implement OnPush change detection** for better performance
5. **Use computed() for derived state** instead of getters or manual calculations
6. **Leverage new control flow syntax** (@if, @for, @switch) for better performance and type safety
7. **Use input() and output()** functions instead of decorators for better type inference

This approach ensures modern, performant, and maintainable Angular applications following the latest best practices as of 2025.

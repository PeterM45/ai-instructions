You are an expert in React 19, TypeScript, and modern web application development. You write maintainable, performant, and accessible code following React 19 and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking with `"strict": true` in tsconfig.json
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
- Use proper generics for reusable components and hooks
- Leverage template literal types for better string typing

## React 19 Core Principles

- Embrace Server Components for improved performance and SEO
- Use the React Compiler for automatic optimizations
- Prefer function components over class components
- Use modern ESM imports instead of CommonJS
- Implement proper error boundaries for robust applications

## Hooks and State Management

- Use `useActionState` for managing form submission states instead of manual state tracking
- Implement `useOptimistic` for immediate UI feedback during async operations
- Use `useTransition` to mark non-urgent state updates and prevent UI blocking
- Use `useFormStatus` to track form submission status in child components
- Prefer `useState` for simple local state
- Use `useReducer` for complex state logic with multiple sub-values
- Implement `useMemo` and `useCallback` judiciously for performance optimization

## Server Components

- Use Server Components by default for initial page loads and SEO benefits
- Mark Client Components with `'use client'` directive only when necessary
- Keep Server Components pure and avoid browser-only APIs
- Use Server Actions for form submissions and server-side mutations
- Implement proper streaming with Suspense boundaries

## Components Best Practices

- Keep components small and focused on a single responsibility
- Use TypeScript interfaces for prop definitions
- Implement proper key props for list rendering
- Use React.memo() for expensive components that re-render frequently
- Prefer composition over inheritance
- Use render props or custom hooks for logic reuse

## Forms and Actions

- Use Server Actions for form handling when possible
- Implement `useActionState` for managing form submission lifecycle
- Use `useOptimistic` for immediate UI feedback during form submissions
- Leverage `useFormStatus` in child components to track form state
- Prefer controlled components for form inputs
- Implement proper form validation and error handling

## Performance Optimization

- Use React.lazy() for code splitting and lazy loading
- Implement Suspense boundaries for loading states
- Use `useTransition` for non-urgent updates that shouldn't block UI
- Optimize asset loading with proper preloading strategies
- Use `useOptimistic` for perceived performance improvements
- Implement proper memoization strategies

## Document Metadata

- Use native metadata rendering in components (title, meta, link tags)
- React 19 automatically hoists metadata tags to document head
- Implement proper SEO optimization with Server Components

## Error Handling

- Implement Error Boundaries for graceful error recovery
- Use proper error states in `useActionState` and async operations
- Implement loading and error states consistently
- Provide meaningful error messages to users

## Styling and CSS

- Use CSS Modules or CSS-in-JS solutions
- Implement responsive design with modern CSS features
- Use CSS custom properties for theming
- Prefer semantic HTML elements for accessibility

## Testing

- Write unit tests with React Testing Library
- Test Server Components and Server Actions appropriately
- Mock external dependencies and APIs
- Test error boundaries and loading states
- Implement integration tests for critical user flows

## Accessibility

- Use semantic HTML elements
- Implement proper ARIA labels and roles
- Ensure keyboard navigation support
- Test with screen readers
- Maintain proper color contrast ratios
- Use focus management for dynamic content

## Project Structure

- Organize components by feature or domain
- Separate Server and Client Components clearly
- Use consistent naming conventions
- Implement proper barrel exports
- Keep utility functions separate from components

## Migration and Compatibility

- Follow React 19 migration guides for upgrading from React 18
- Update dependencies that support React 19
- Test thoroughly when migrating Server Components
- Use incremental migration strategies for large applications

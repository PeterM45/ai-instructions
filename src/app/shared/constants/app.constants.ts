import { TechnologyType } from '@models/technology.model';

export const TECHNOLOGY_TYPES: readonly TechnologyType[] = [
  'Framework',
  'Language',
  'Runtime',
  'Styling',
  'Database',
  'Cloud Service',
  'Tool',
  'Other',
] as const;

export const APP_CONFIG = {
  ANGULAR_VERSION: '20',
  GITHUB_REPO_URL: 'https://github.com/PeterM45/ai-instructions',
  ANGULAR_DOCS_URL: 'https://angular.dev',
  CONTRIBUTING_URL:
    'https://github.com/PeterM45/ai-instructions/blob/main/CONTRIBUTING.md',
  NEW_ISSUE_URL: 'https://github.com/PeterM45/ai-instructions/issues/new',
  INSTRUCTIONS_BASE_URL:
    'https://github.com/PeterM45/ai-instructions/blob/main/instructions',
} as const;

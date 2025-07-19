export interface Technology {
  id: string;
  environment: string;
  type: TechnologyType;
  rulesFile: string;
  installationInstructions: string;
  description?: string;
  link: string;
  lastUpdated?: string;
  contributors?: string[];
}

export type TechnologyType =
  | 'IDE'
  | 'Framework'
  | 'Tool'
  | 'Platform'
  | 'Database'
  | 'Cloud Service'
  | 'AI/ML'
  | 'Other';

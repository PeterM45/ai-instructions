export interface Technology {
  id: string;
  environment: string;
  type: TechnologyType;
  rulesFile: string;
  installationInstructions: string;
  description?: string;
  logo?: string;
  logoAlt?: string;
  link: string;
  lastUpdated?: string;
  contributors?: string[];
}

export type TechnologyType =
  | 'Framework'
  | 'Language'
  | 'Runtime'
  | 'Styling'
  | 'Database'
  | 'Cloud Service'
  | 'Tool'
  | 'Other';

export enum Learned {
  'selfLearn' = 'self-learn',
  'machine' = 'machine',
}

export interface FiltersProps {
  learned?: Learned
  versionGroup?: string
}

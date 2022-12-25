export enum Learned {
  'movesAll' = 'moves-all',
  'selfLearn' = 'self-learn',
  'machine' = 'machine',
}

export interface FiltersProps {
  learned?: Learned
  versionGroup?: string
}

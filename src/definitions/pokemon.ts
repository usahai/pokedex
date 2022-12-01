export interface PokemonData {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities?: AbilitiesEntity[] | null
  forms?: RetrivalProps[] | null
  game_indices?: GameIndicesEntity[] | null
  held_items?: HeldItemsEntity[] | null
  location_area_encounters: string
  moves?: MovesEntity[] | null
  species: RetrivalProps
  sprites: any
  stats?: StatsEntity[] | null
  types?: TypesEntity[] | null
  past_types?: PastTypesEntity[] | null
}

export interface AbilitiesEntity {
  is_hidden: boolean
  slot: number
  ability: RetrivalProps
}

export interface RetrivalProps {
  name: string
  url: string
}

export interface GameIndicesEntity {
  game_index: number
  version: RetrivalProps
}

export interface HeldItemsEntity {
  item: RetrivalProps
  version_details?: VersionDetailsEntity[] | null
}

export interface VersionDetailsEntity {
  rarity: number
  version: RetrivalProps
}

export interface MovesEntity {
  move: RetrivalProps
  version_group_details?: VersionGroupDetailsEntity[] | null
}

export interface VersionGroupDetailsEntity {
  level_learned_at: number
  version_group: RetrivalProps
  move_learn_method: RetrivalProps
}

export interface StatsEntity {
  base_stat: number
  effort: number
  stat: RetrivalProps
}
export interface TypesEntity {
  slot: number
  type: RetrivalProps
}
export interface PastTypesEntity {
  generation: RetrivalProps
  types?: TypesEntity[] | null
}

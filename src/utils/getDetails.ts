import { PokemonData } from 'definitions'
import { FiltersProps, Learned } from 'definitions/filters'
import { capitalizeFirstLetter } from './string'

export const getIdNumber = (pokemon: PokemonData) => pokemon.order

export const getAbilities = (pokemon: PokemonData, filters = {}) =>
  pokemon?.abilities?.map((item) => capitalizeFirstLetter(item?.ability?.name))

export const getTypes = (pokemon: PokemonData, filters = {}) => {
  return pokemon?.types?.map((item) => capitalizeFirstLetter(item.type.name))
}

export const getMoves = (pokemon: PokemonData, filters: FiltersProps = {}) => {
  let allMoves = pokemon?.moves

  if (filters?.learned === Learned.selfLearn) {
    allMoves = allMoves?.filter((item) =>
      item.version_group_details?.some((ver) => ver.level_learned_at !== 0),
    )
  }

  if (filters?.learned === Learned.machine) {
    allMoves = allMoves?.filter((item) =>
      item.version_group_details?.every((ver) => ver.level_learned_at === 0),
    )
  }

  return allMoves?.map((rmItems) => capitalizeFirstLetter(rmItems?.move?.name))
}

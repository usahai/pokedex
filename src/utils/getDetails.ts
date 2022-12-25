import { PokemonData } from 'definitions'
import { capitalizeFirstLetter } from './string'

export const getIdNumber = (pokemon: PokemonData) => pokemon.order

export const getAbilities = (pokemon: PokemonData, filters = {}) =>
  pokemon?.abilities?.map((item) => capitalizeFirstLetter(item?.ability?.name))

export const getTypes = (pokemon: PokemonData, filters = {}) => {
  return pokemon?.types?.map((item) => capitalizeFirstLetter(item.type.name))
}

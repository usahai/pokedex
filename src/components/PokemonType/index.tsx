import clsx from 'clsx'
import { POKEMON_TYPE, POKEMON_TYPE_TYPE } from 'constants/types'
import React from 'react'

export interface PokemonTypeProps {
  type: POKEMON_TYPE_TYPE
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  const pokemonType = type.toUpperCase()

  return (
    <span
      className={clsx(
        'text-black dark:text-white font-medium px-2 py-1 mr-2 rounded',
        { 'bg-BUG': pokemonType === POKEMON_TYPE.BUG },
        { 'bg-DARK': pokemonType === POKEMON_TYPE.DARK },
        { 'bg-DRAGON': pokemonType === POKEMON_TYPE.DRAGON },
        { 'bg-ELECTRIC': pokemonType === POKEMON_TYPE.ELECTRIC },
        { 'bg-FAIRY': pokemonType === POKEMON_TYPE.FAIRY },
        { 'bg-FIGHTING': pokemonType === POKEMON_TYPE.FIGHTING },
        { 'bg-FIRE': pokemonType === POKEMON_TYPE.FIRE },
        { 'bg-FLYING': pokemonType === POKEMON_TYPE.FLYING },
        { 'bg-GHOST': pokemonType === POKEMON_TYPE.GHOST },
        { 'bg-GRASS': pokemonType === POKEMON_TYPE.GRASS },
        { 'bg-GROUND': pokemonType === POKEMON_TYPE.GROUND },
        { 'bg-ICE': pokemonType === POKEMON_TYPE.ICE },
        { 'bg-NORMAL': pokemonType === POKEMON_TYPE.NORMAL },
        { 'bg-POISON': pokemonType === POKEMON_TYPE.POISON },
        { 'bg-PSYCHIC': pokemonType === POKEMON_TYPE.PSYCHIC },
        { 'bg-ROCK': pokemonType === POKEMON_TYPE.ROCK },
        { 'bg-STEEL': pokemonType === POKEMON_TYPE.STEEL },
        { 'bg-WATER': pokemonType === POKEMON_TYPE.WATER },
      )}
    >
      {type}
    </span>
  )
}

export default PokemonType

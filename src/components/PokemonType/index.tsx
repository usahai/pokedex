import clsx from 'clsx'
import { COLORS } from 'constants/colors'
import { POKEMON_TYPE_TYPE } from 'constants/types'
import React from 'react'

export interface PokemonTypeProps {
  type: POKEMON_TYPE_TYPE
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  const pokemonType = type.toUpperCase()
  const color = `bg-[${COLORS[pokemonType]}]`

  return (
    <span
      className={clsx(
        'text-black dark:text-white font-medium px-2 py-1 mr-2 rounded',
        color,
      )}
    >
      {type}
    </span>
  )
}

export default PokemonType


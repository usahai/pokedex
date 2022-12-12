import React from 'react'
import PokemonBanner from 'assets/pokemon_banner.png'
import ThemeToggleButton from 'containers/ThemeToggleButton'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-gray-100 dark:bg-gray-700 sm:px-4 shadow-xl">
      <div className="flex justify-between items-center">
        <img className="h-12" src={PokemonBanner} alt="pokemon_banner" />
        <ThemeToggleButton />
      </div>
    </header>
  )
}

export default Header

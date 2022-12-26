const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        BUG: '#A6B91A',
        DARK: '#705746',
        DRAGON: '#6F35FC',
        ELECTRIC: '#F7D02C',
        FAIRY: '#D685AD',
        FIGHTING: '#C22E28',
        FIRE: '#EE8130',
        FLYING: '#A98FF3',
        GHOST: '#735797',
        GRASS: '#7AC74C',
        GROUND: '#E2BF65',
        ICE: '#96D9D6',
        NORMAL: '#A8A77A',
        POISON: '#A33EA1',
        PSYCHIC: '#F95587',
        ROCK: '#B6A136',
        STEEL: '#B7B7CE',
        WATER: '#6390F0',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      })
    }),
  ],
  darkMode: 'class',
}

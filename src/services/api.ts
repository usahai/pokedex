import { PokedexData, PokemonData } from 'definitions'

export const fetchPokedexData = async (url: string) =>
  new Promise<PokedexData>(async (resolve, reject) => {
    try {
      const resp = await fetch(url)
      const data: PokedexData = await resp.json()

      resolve(data)
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })

export const fetchPokemonData = async (url: string) =>
  new Promise<PokemonData>(async (resolve, reject) => {
    try {
      const resp = await fetch(url)
      const data: PokemonData = await resp.json()

      resolve(data)
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })

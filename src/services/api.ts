import {
  PokedexData,
  PokedexInfiniteQueryResponse,
  PokemonData,
} from 'definitions'

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

export const fetchPokedexDatav2 = ({ pageParam }: { pageParam: string }) =>
  new Promise<PokedexInfiniteQueryResponse>(async (resolve, reject) => {
    try {
      const resp = await fetch(pageParam)
      const data: PokedexData = await resp.json()

      resolve({
        response: data?.results,
        nextPage: data?.next,
      })
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

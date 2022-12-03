import { useCallback, useEffect, useState } from 'react'
import { PokedexData, PokedexIndexData } from 'definitions'
import { fetchPokedexData } from 'services/api'

interface UsePokedexDataProps {
  refetch: () => void
  pokedex: PokedexIndexData[]
  totalCount: number
  hasNextPage: boolean
  isNextPageLoading: boolean
}

const usePokedexData = (): UsePokedexDataProps => {
  const [pokedex, setPokedex] = useState<PokedexIndexData[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [next, setNext] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getData = useCallback(async () => {
    try {
      setIsLoading(true)
      let resp: PokedexData = await fetchPokedexData(
        next || 'https://pokeapi.co/api/v2/pokemon',
      )

      const updatedPokemon = [...pokedex, ...resp.results]
      setPokedex(updatedPokemon)
      setTotalCount(resp.count)
      setNext(resp.next ?? '')
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to fetch data')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokedex])

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refetch = () => {
    getData()
  }

  return {
    refetch,
    pokedex,
    totalCount,
    hasNextPage: !!next,
    isNextPageLoading: isLoading,
  }
}

export default usePokedexData

import { Nullable, PokemonData } from 'definitions'
import { useEffect, useState } from 'react'
import { fetchPokemonData } from 'services/api'

interface UsePokemonDataProps {
  isLoading: boolean
  data: Nullable<PokemonData>
}

const usePokemonData = (url: string): UsePokemonDataProps => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<Nullable<PokemonData>>(undefined)

  const getData = async () => {
    try {
      setIsLoading(false)
      let resp: PokemonData = await fetchPokemonData(url)
      console.log('pokemon:', resp)

      setData(resp)
    } catch (error) {
      console.error('Failed to fetch Pokemon data')
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isLoading,
    data,
  }
}

export default usePokemonData

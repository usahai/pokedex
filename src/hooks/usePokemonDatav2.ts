import { useQuery } from '@tanstack/react-query'
import { fetchPokemonData } from 'services/api'

const usePokemonDatav2 = ({ url }: { url: string }) => {
  const query = useQuery(['pokemon', url], () => fetchPokemonData(url))

  return query
}

export default usePokemonDatav2

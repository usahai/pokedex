import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPokedexDatav2 } from 'services/api'

const usePokedexDatav2 = () => {
  const query = useInfiniteQuery({
    queryKey: ['pokedexData'],
    queryFn: ({
      pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
    }) => fetchPokedexDatav2({ pageParam }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => lastPage?.nextPage,
  })

  return query
}

export default usePokedexDatav2

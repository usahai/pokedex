import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPokedexDatav3 } from 'services/api'

const usePokedexDatav3 = () => {
  return useInfiniteQuery(
    ['pokedex'],
    ({ pageParam }) => fetchPokedexDatav3(pageParam, 20),
    {
      getNextPageParam: (lastPage, groups) => groups.length * 20,
    },
  )
}

export default usePokedexDatav3

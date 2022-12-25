import { useMemo } from 'react'
import Pokemon from 'components/Pokemon'
import AppContainer from 'containers/AppContainer'
import { Nullable, PokedexItemData } from 'definitions'
import usePokedexDatav3 from 'hooks/usePokedexDatav3'

const Home = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isLoadingPokedex,
  } = usePokedexDatav3()

  const pokedex: Nullable<PokedexItemData[]> = useMemo(() => {
    return data?.pages?.map((item) => item?.response).flat()
  }, [data])

  return (
    <AppContainer>
      <Pokemon
        data={pokedex}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isLoadingPokedex={isLoadingPokedex}
      />
    </AppContainer>
  )
}

export default Home

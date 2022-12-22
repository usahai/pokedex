import Pokemon from 'components/Pokemon'
import AppContainer from 'containers/AppContainer'
import { Nullable, PokedexItemData } from 'definitions'
import usePokedexDatav3 from 'hooks/usePokedexDatav3'
import { useMemo } from 'react'

const Home = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage: isNextPageLoading,
  } = usePokedexDatav3()

  const pokedex: Nullable<PokedexItemData[]> = useMemo(() => {
    return data?.pages?.map((item) => item?.response).flat()
  }, [data])

  return (
    <AppContainer>
      <div className="block">
        <Pokemon
          data={pokedex}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
        />
      </div>
    </AppContainer>
  )
}

export default Home

import Pokemon from 'components/Pokemon'
import { Nullable, PokedexItemData } from 'definitions'
import usePokedexDatav2 from 'hooks/usePokedexDatav2'
import { useMemo } from 'react'

const Home = () => {
  const {
    data,
    fetchNextPage: loadMoreItems,
    hasNextPage,
    isFetchingNextPage: isNextPageLoading,
  } = usePokedexDatav2()

  const pokedex: Nullable<PokedexItemData[]> = useMemo(() => {
    return data?.pages?.map((item) => item?.response).flat()
  }, [data])

  return (
    <div>
      <div className="block">
        <Pokemon
          data={pokedex}
          loadMoreItems={loadMoreItems}
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
        />
      </div>
    </div>
  )
}

export default Home

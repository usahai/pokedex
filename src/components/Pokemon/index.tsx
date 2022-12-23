import Card from 'components/Card'
import { Nullable, PokedexItemData } from 'definitions'
import InfiniteScroll from 'react-infinite-scroller'
import VirtualScroll from 'containers/VirtualScroll'

interface PokemonContainerProps {
  data: Nullable<PokedexItemData[]>
  fetchNextPage: () => void
  hasNextPage: boolean | undefined
  isFetchingNextPage: boolean
  isLoadingPokedex: boolean
}

const Pokemon: React.FC<PokemonContainerProps> = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoadingPokedex,
  ...props
}) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {data?.map((item) => (
        <VirtualScroll key={item.name} height={25}>
          <Card
            pokemonUrl={item.url}
            key={item.name}
            isFetchingNextPage={isFetchingNextPage}
            isLoadingPokedex={isLoadingPokedex}
          />
        </VirtualScroll>
      ))}
    </InfiniteScroll>
  )
}

export default Pokemon

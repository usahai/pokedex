import Card from 'components/Card'
import { Nullable, PokedexItemData } from 'definitions'
import InfiniteScroll from 'react-infinite-scroller'
import VirtualScroll from 'containers/VirtualScroll'

interface PokemonContainerProps {
  data: Nullable<PokedexItemData[]>
  loadMoreItems: () => void
  hasNextPage: boolean | undefined
  isNextPageLoading: boolean
}

const Pokemon: React.FC<PokemonContainerProps> = ({
  data,
  loadMoreItems,
  hasNextPage,
  ...props
}) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMoreItems}
      hasMore={hasNextPage}
      className="grid grid-cols-3 gap-6"
    >
      {data?.map((item) => (
        <VirtualScroll key={item.name}>
          <Card pokemonUrl={item.url} key={item.name} />
        </VirtualScroll>
      ))}
    </InfiniteScroll>
  )
}

export default Pokemon

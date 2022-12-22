import Card from 'components/Card'
import { Nullable, PokedexItemData } from 'definitions'
import InfiniteScroll from 'react-infinite-scroller'
import VirtualScroll from 'containers/VirtualScroll'

interface PokemonContainerProps {
  data: Nullable<PokedexItemData[]>
  fetchNextPage: () => void
  hasNextPage: boolean | undefined
  isNextPageLoading: boolean
}

const Pokemon: React.FC<PokemonContainerProps> = ({
  data,
  fetchNextPage,
  hasNextPage,
  ...props
}) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      className="grid grid-cols-3 gap-6"
    >
      {data?.map((item) => (
        <Card pokemonUrl={item.url} key={item.name} />
      ))}
    </InfiniteScroll>
  )
}

export default Pokemon

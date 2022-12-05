import Card from 'components/Card'
import { PokedexItemData } from 'definitions'
import VirtualScroll from './VirtualScroll'
import styles from './index.module.css'
import InfiniteScroll from 'react-infinite-scroller'

interface PokemonContainerProps {
  data: PokedexItemData[]
  loadMoreItems: () => void
  hasNextPage: boolean
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
      className={styles.container}
    >
      {data.map((item) => (
        <VirtualScroll height={38} key={item.name}>
          <Card pokemonUrl={item.url} key={item.name} />
        </VirtualScroll>
      ))}
    </InfiniteScroll>
  )
}

export default Pokemon

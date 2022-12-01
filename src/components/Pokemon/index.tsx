import Card from 'components/Card'
import { PokedexIndexData } from 'definitions'
// import { FixedSizeList } from 'react-window'
// import InfiniteLoader from 'react-window-infinite-loader'

interface PokemonContainerProps {
  data: PokedexIndexData[]
  refetch: () => void
  hasNextPage: boolean
  isNextPageLoading: boolean
}

const Pokemon: React.FC<PokemonContainerProps> = ({ data, refetch }) => {
  return (
    // <InfiniteLoader isItemLoaded={} itemCount={data.length} loadMoreItems={refetch}>
    //   {({ onItemsRendered, ref }) => (
    //     <FixedSizeList itemCount={data.length} onItemsRendered={} ref={ref}>
    //       {}
    //     </FixedSizeList>
    //   )}
    // </InfiniteLoader>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {data.map((item, index) => (
        <Card pokemonUrl={item.url} key={index} />
      ))}
    </div>
  )
}

export default Pokemon

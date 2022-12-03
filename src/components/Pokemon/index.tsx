// import Card from 'components/Card'
import Card from 'components/Card'
import { PokedexIndexData } from 'definitions'
import VirtualScroll from './VirtualSroll'
import styles from './index.module.css'

interface PokemonContainerProps {
  data: PokedexIndexData[]
  loadMoreItems: () => void
  hasNextPage: boolean
  isNextPageLoading: boolean
}

const Pokemon: React.FC<PokemonContainerProps> = ({ data, ...props }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <VirtualScroll>
          <Card pokemonUrl={item.url} key={item.name} />
        </VirtualScroll>
      ))}
    </div>
  )
}

export default Pokemon

import Pokemon from 'components/Pokemon'
import usePokedexData from 'hooks/usePokedexData'
import styles from './index.module.css'

const Home = () => {
  const {
    pokedex,
    refetch: loadMoreItems,
    hasNextPage,
    isNextPageLoading,
  } = usePokedexData()

  return (
    <div>
      <h1>Pokemon</h1>
      <div className={styles.container}>
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

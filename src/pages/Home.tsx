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
          hasNextPage={hasNextPage}
          data={pokedex}
          loadMoreItems={loadMoreItems}
          isNextPageLoading={isNextPageLoading}
        />
      </div>
    </div>
  )
}

export default Home

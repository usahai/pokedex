import Pokemon from 'components/Pokemon'
import usePokedexData from 'hooks/usePokedexData'
import styles from './index.module.css'

const Home = () => {
  const { pokedex, refetch, hasNextPage, isNextPageLoading, ...rest } =
    usePokedexData()

  return (
    <div>
      <h1>Pokemon</h1>
      <div className={styles.container}>
        <Pokemon
          data={pokedex}
          refetch={refetch}
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
        />
      </div>
    </div>
  )
}

export default Home

import Pokemon from 'components/Pokemon'
import { Nullable, PokedexItemData } from 'definitions'
import usePokedexDatav2 from 'hooks/usePokedexDatav2'
import { useMemo } from 'react'
import styles from './index.module.css'

const Home = () => {
  const {
    data,
    fetchNextPage: loadMoreItems,
    hasNextPage,
    isFetchingNextPage: isNextPageLoading,
  } = usePokedexDatav2()

  console.log('[H] data:', data)

  const pokedex: Nullable<PokedexItemData[]> = useMemo(() => {
    return data?.pages?.map((item) => item?.response).flat()
  }, [data])

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

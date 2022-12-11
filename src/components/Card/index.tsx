// import usePokemonData from 'hooks/usePokemonData'
import usePokemonDatav2 from 'hooks/usePokemonDatav2'
import styles from './index.module.css'

interface CardProps {
  pokemonUrl: string
}

const Card: React.FC<CardProps> = ({ pokemonUrl }) => {
  // const { data } = usePokemonData(pokemonUrl)
  const { data } = usePokemonDatav2({ url: pokemonUrl })

  return (
    <div className={styles.container}>
      <img
        src={data?.sprites?.other?.['official-artwork']?.front_default}
        alt={data?.name}
      />
      <h1>{data?.name}</h1>
    </div>
  )
}

export default Card

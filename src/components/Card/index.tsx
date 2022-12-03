import usePokemonData from 'hooks/usePokemonData'
import styles from './index.module.css'

interface CardProps {
  pokemonUrl: string
}

const Card: React.FC<CardProps> = ({ pokemonUrl }) => {
  const { data } = usePokemonData(pokemonUrl)

  return (
    <div className={styles.container}>
      <p>
        <img
          src={data?.sprites?.other?.['official-artwork']?.front_default}
          alt={data?.name}
        />
        <h1>{data?.name}</h1>
      </p>
    </div>
  )
}

export default Card

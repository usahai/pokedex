import usePokemonDatav2 from 'hooks/usePokemonDatav2'
import clsx from 'clsx'
import { capitalizeFirstLetter } from 'utils/string'

interface CardProps {
  pokemonUrl: string
}

const Card: React.FC<CardProps> = ({ pokemonUrl }) => {
  const { data } = usePokemonDatav2({ url: pokemonUrl })
  const name = data?.name || ''

  return (
    <div
      className={clsx(
        'flex flex-col p-8 items-center rounded-2xl shadow-lg',
        'bg-gray-50 dark:bg-slate-400',
      )}
    >
      <img
        src={data?.sprites?.other?.['official-artwork']?.front_default}
        alt={data?.name}
      />
      <div className="flex justify-start items-center w-full h-16 -mb-8">
        <h1 className="font-bold dark:text-gray-100">
          {capitalizeFirstLetter(name)}
        </h1>
      </div>
    </div>
  )
}

export default Card

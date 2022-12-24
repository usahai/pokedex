import usePokemonDatav2 from 'hooks/usePokemonDatav2'
import clsx from 'clsx'
import { capitalizeFirstLetter } from 'utils/string'
import { Pokeball } from 'containers/Pokeball'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface CardProps {
  pokemonUrl: string
  isFetchingNextPage: boolean
  isLoadingPokedex: boolean
}

const Card: React.FC<CardProps> = ({
  pokemonUrl,
  isFetchingNextPage,
  isLoadingPokedex,
}) => {
  const { data, isLoading: isLoadingPokemon } = usePokemonDatav2({
    url: pokemonUrl,
  })
  const name = data?.name || ''

  return (
    <div
      id="content-container"
      className={clsx(
        'flex flex-col items-center rounded-2xl shadow-lg',
        'bg-gray-50 dark:bg-slate-400',
        'h-[24rem]',
      )}
    >
      <div
        id="content-image"
        className="flex justify-center items-center h-80 w-80"
      >
        {isLoadingPokemon ? (
          <div className={clsx('p-8', 'flex justify-center items-center')}>
            <Pokeball />
          </div>
        ) : (
          <img
            id="content-image"
            src={data?.sprites?.other?.['official-artwork']?.front_default}
            alt={data?.name}
          />
        )}
      </div>
      <div
        id="content-area"
        className="p-8 flex justify-start items-center w-full h-16 -mb-8"
      >
        <SkeletonTheme
          baseColor="#ebebeb"
          highlightColor="#c8c8c8a8"
          borderRadius="0.25rem"
          duration={2}
        >
          <h1 className="font-bold dark:text-gray-100">
            {isLoadingPokedex || isFetchingNextPage ? (
              <Skeleton width={180} height={40} />
            ) : (
              capitalizeFirstLetter(name)
            )}
          </h1>
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default Card

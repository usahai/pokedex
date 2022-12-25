import PokemonType from 'components/PokemonType'
import Spinner from 'components/Spinner'
import { POKEMON_TYPE_TYPE } from 'constants/types'
import { POKEMON } from 'constants/url'
import AppContainer from 'containers/AppContainer'
import { FiltersProps, Learned } from 'definitions/filters'
import usePokemonDatav2 from 'hooks/usePokemonDatav2'
import { MouseEvent, useState } from 'react'
import { useLocation } from 'react-router'
import { getAbilities, getIdNumber, getMoves, getTypes } from 'utils/getDetails'

const ProductDetailPage = () => {
  const [filters, setFilters] = useState<FiltersProps>({
    learned: undefined,
    versionGroup: undefined,
  })
  const { pathname } = useLocation()
  const { data } = usePokemonDatav2({ url: POKEMON + pathname })

  const handleLearnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === Learned.movesAll) {
      setFilters((prev) => ({
        ...prev,
        learned: undefined,
      }))
    } else if (event.currentTarget.id === Learned.selfLearn) {
      setFilters((prev) => ({
        ...prev,
        learned: Learned.selfLearn,
      }))
    } else if (event.currentTarget.id === Learned.machine) {
      setFilters((prev) => ({
        ...prev,
        learned: Learned.machine,
      }))
    }
  }

  return (
    <AppContainer className="min-h-[calc(100vh-8.5rem)]">
      <div
        id="pdp-container"
        className="inline-flex flex-col justify-start md:flex-row md:justify-center items-center w-full"
      >
        <div
          id="left-container"
          className="w-full flex flex-col justify-center basis-1/3"
        >
          <img
            id="content-image"
            src={data?.sprites?.other?.['official-artwork']?.front_default}
            alt={data?.name}
          />
          {data ? (
            <table id="pokemon-details" className="text-left">
              <tr>
                <th>Number</th>
              </tr>
              <tr>
                <td>{getIdNumber(data)}</td>
              </tr>
              <tr>
                <th>Abilities</th>
              </tr>
              <tr>
                <td>{getAbilities(data, filters)?.join(', ')}</td>
              </tr>
              <tr>
                <th>Type</th>
              </tr>
              <tr>
                {getTypes(data, filters)?.map((item) => (
                  <PokemonType key={item} type={item as POKEMON_TYPE_TYPE} />
                ))}
              </tr>
            </table>
          ) : (
            <Spinner />
          )}
        </div>
        <div id="right-container" className="w-full flex basis-2/3">
          {data && (
            <div id="moves-container" className="w-full">
              <h1>Moves:</h1>
              <div id="moves-filter">
                <span id="learned-at">
                  <button
                    className="mr-2"
                    onClick={handleLearnClick}
                    id={Learned.selfLearn}
                  >
                    Self-Learn
                  </button>
                  <button
                    className="mr-2"
                    onClick={handleLearnClick}
                    id={Learned.machine}
                  >
                    TM/HM
                  </button>
                  <button onClick={handleLearnClick} id={Learned.movesAll}>
                    All
                  </button>
                </span>
              </div>
              <div id="moves-list" className="max-h-[70vh] overflow-y-scroll">
                <ul>
                  {getMoves(data, filters)?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppContainer>
  )
}

export default ProductDetailPage

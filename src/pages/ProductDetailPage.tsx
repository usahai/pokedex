import PokemonType from 'components/PokemonType'
import Spinner from 'components/Spinner'
import { POKEMON } from 'constants/url'
import AppContainer from 'containers/AppContainer'
import usePokemonDatav2 from 'hooks/usePokemonDatav2'
import { useLocation } from 'react-router'
import { getAbilities, getIdNumber, getTypes } from 'utils/getDetails'

const ProductDetailPage = () => {
  const { pathname } = useLocation()
  const { data } = usePokemonDatav2({ url: POKEMON + pathname })

  return (
    <AppContainer>
      <div
        id="pdp-container"
        className="inline-flex flex-col justify-start md:flex-row md:justify-center items-center w-full"
      >
        <div
          id="card-container"
          className="w-full flex justify-center basis-1/3"
        >
          <img
            id="content-image"
            src={data?.sprites?.other?.['official-artwork']?.front_default}
            alt={data?.name}
          />
        </div>
        <div id="right-container" className="w-full flex basis-2/3">
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
                <td>{getAbilities(data)?.join(', ')}</td>
              </tr>
              <tr>
                <th>Type</th>
              </tr>
              <tr>
                {getTypes(data)?.map((item) => (
                  <PokemonType type={item as any} />
                ))}
              </tr>
            </table>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </AppContainer>
  )
}

export default ProductDetailPage

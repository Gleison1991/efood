import ProductsList from '../../components/ProductsList'

import HeaderHome from '../../components/Banner'
import Footer from '../../components/Footer'

import { useGetFeaturedPratoQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant } = useGetFeaturedPratoQuery()

  if (restaurant) {
    return (
      <>
        <HeaderHome />
        <ProductsList pratos={restaurant} />
        <Footer />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Home

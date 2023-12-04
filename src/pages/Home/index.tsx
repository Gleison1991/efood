import ProductsList from '../../components/ProductsList'
import Prato from '../../models/Prato'

import Sushi from '../../assets/images/sushi.png'
import ComidaItaliana from '../../assets/images/comidaItaliana.png'
import HeaderHome from '../../components/Banner'
import Footer from '../../components/Footer'

import { useGetFeaturedPratoQuery } from '../../services/api'

const Home = () => {
  const { data: pratosHome } = useGetFeaturedPratoQuery()

  if (pratosHome) {
    return (
      <>
        <HeaderHome />
        <ProductsList pratos={pratosHome} />
        <Footer />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Home

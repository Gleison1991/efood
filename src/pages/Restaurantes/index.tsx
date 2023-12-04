import Header from '../../components/Header'

import PratoRestaurante from '../../models/PratoRestaurante'
import Esfirra from '../../assets/images/infirra.png'
import ProductsListRestaurant from '../../components/ProductListRestaurant'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import { useGetFeaturedPratoQuery } from '../../services/api'

const pratosRestaurante: PratoRestaurante[] = [
  {
    id: 7,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra,
    infos: '',
    preco: 60.9
  },
  {
    id: 8,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra,
    infos: '',
    preco: 60.9
  },
  {
    id: 9,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra,
    infos: '',
    preco: 60.9
  },
  {
    id: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra,
    infos: '',
    preco: 60.9
  },
  {
    id: 11,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra,
    infos: '',
    preco: 60.9
  },
  {
    id: 12,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra,
    infos: '',
    preco: 60.9
  }
]

const Restaurantes = () => {
  const { data: pratosDaPaginaRestaurante } = useGetFeaturedPratoQuery()

  if (!pratosDaPaginaRestaurante) {
    return null
  }

  return (
    <>
      <Header />
      <Hero />
      <ProductsListRestaurant pratosRestaurante={pratosRestaurante} />
      <Footer />
    </>
  )
}

export default Restaurantes

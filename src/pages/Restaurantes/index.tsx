import Header from '../../components/Header'

import PratoRestaurante from '../../models/PratoRestaurante'
import Esfirra from '../../assets/images/infirra.png'
import ProductsListRestaurant from '../../components/ProductListRestaurant'
import BannerPerfil from '../../components/BannerPerfil'

const pratosRestaurante: PratoRestaurante[] = [
  {
    id: 7,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra
  },
  {
    id: 8,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra
  },
  {
    id: 9,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra
  },
  {
    id: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra
  },
  {
    id: 11,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra
  },
  {
    id: 12,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita ',
    image: Esfirra
  }
]

const Restaurantes = () => {
  return (
    <>
      <Header />
      <BannerPerfil />
      <ProductsListRestaurant pratosRestaurante={pratosRestaurante} />
    </>
  )
}

export default Restaurantes

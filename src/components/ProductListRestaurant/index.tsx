import PratoRestaurante from '../../models/PratoRestaurante'
import { ProductRestaurant } from '../ProductRestaurant'

import PizzaMargueritaDoPopUp from '../../assets/images/PizzaMargueritaDoPopUp.png'

import { Container, List } from './styles'

export type Props = {
  pratosRestaurante: PratoRestaurante[]
}

type PopUpDoPrato = {
  type: 'image'
  url: string
}

const mock: PopUpDoPrato[] = [
  {
    type: 'image',
    url: PizzaMargueritaDoPopUp
  }
]
const defaultValueInfos = { detalhes: 'Informação padrão' }

const ProductsListRestaurant = ({ pratosRestaurante }: Props) => (
  <Container pratosRestaurante={pratosRestaurante}>
    <div className="container">
      <List>
        {pratosRestaurante.map((pratoRestaurante) => (
          <ProductRestaurant
            key={pratoRestaurante.id}
            image={pratoRestaurante.image}
            title={pratoRestaurante.title}
            description={pratoRestaurante.description}
            prato={{
              ...pratoRestaurante,
              infos: pratoRestaurante.infos ?? defaultValueInfos,
              preco: pratoRestaurante.preco ?? 0
            }}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsListRestaurant

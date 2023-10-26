import PratoRestaurante from '../../models/PratoRestaurante'
import { ProductRestaurant } from '../ProductRestaurant'

import { Container, List } from './styles'

export type Props = {
  pratosRestaurante: PratoRestaurante[]
}

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
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsListRestaurant

import Prato from '../../models/Prato'
import Product from '../Product'
import Estrelinha from '../../assets/images/estrela.png'
import { Container, List } from './styles'

export type Props = {
  pratos: Prato[]
}

const ProductsList = ({ pratos }: Props) => (
  <Container pratos={pratos}>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            image={prato.image}
            infos={prato.infos}
            title={prato.title}
            description={prato.description}
            avaliacao={'4,9'}
            estrela={Estrelinha}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList

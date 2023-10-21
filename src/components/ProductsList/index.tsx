import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  background: 'Pink'
}

const ProductsList = ({ background }: Props) => (
  <Container>
    <div className="container">
      <List>
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList

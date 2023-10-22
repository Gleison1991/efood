import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  background: 'Pink'
}

const ProductsList = ({ background }: Props) => (
  <Container>
    <div className="container">
      <List>
        <Product
          image="//placehold.it/487x217"
          infos={['Destaque da semana', 'Japonesa']}
          title="Nome do prato"
          description={'teste'}
        />
        <Product
          image="//placehold.it/487x217"
          infos={['Italiana']}
          title="Nome do prato"
          description={'teste'}
        />
        <Product
          image="//placehold.it/487x217"
          infos={['Italiana']}
          title="Nome do prato"
          description={'teste'}
        />
        <Product
          image="//placehold.it/487x217"
          infos={['Italiana']}
          title="Nome do prato"
          description={'teste'}
        />
        <Product
          image="//placehold.it/487x217"
          infos={['Italiana']}
          title="Nome do prato"
          description={'teste'}
        />
        <Product
          image="//placehold.it/487x217"
          infos={['Italiana']}
          title="Nome do prato"
          description={'teste'}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList

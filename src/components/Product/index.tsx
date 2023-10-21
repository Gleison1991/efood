import Tag from '../Tag'

import { Card, Descricao, Titulo, ContainerDescricao } from './styles'

export const Product = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <ContainerDescricao>
      <Titulo>Nome do prato</Titulo>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias
        illum magnam nemo omnis debitis praesentium quod placeat voluptas
        fugiat? Illum vero distinctio dolores aperiam consequatur minus, minima
        iste atque?
      </Descricao>
      <Tag>Saiba mais</Tag>
    </ContainerDescricao>
  </Card>
)

export default Product

import Tag from '../Tag'

import {
  Image,
  Infos,
  Card,
  Descricao,
  Titulo,
  ContainerDescricao
} from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({ title, description, infos, image }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <ContainerDescricao>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Tag>Saiba mais</Tag>
    </ContainerDescricao>
  </Card>
)

export default Product

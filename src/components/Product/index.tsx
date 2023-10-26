import { Link } from 'react-router-dom'
import Tag from '../Tag'

import {
  Image,
  Infos,
  Card,
  Descricao,
  Titulo,
  ContainerDescricao,
  Avaliacao,
  Estrela
} from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  avaliacao: string
  estrela: string
}

export const Product = ({
  title,
  description,
  infos,
  image,
  avaliacao,
  estrela
}: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <ContainerDescricao>
      <Titulo>{title}</Titulo>
      <Avaliacao>
        {avaliacao}
        <Estrela src={estrela} alt="estrela" />
      </Avaliacao>
      <Descricao>{description}</Descricao>
      <Link to="/restaurantes">
        <Tag>Saiba mais</Tag>
      </Link>
    </ContainerDescricao>
  </Card>
)

export default Product

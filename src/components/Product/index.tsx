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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Titulo>{title}</Titulo>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avaliacao>{avaliacao}</Avaliacao>
          <Estrela src={estrela} alt="Estrela" />
        </div>
      </div>
      <Descricao>{description}</Descricao>
      <Link to="/restaurantes">
        <Tag>Saiba mais</Tag>
      </Link>
    </ContainerDescricao>
  </Card>
)

export default Product

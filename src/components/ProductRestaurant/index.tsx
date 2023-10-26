import { Link } from 'react-router-dom'
import TagRest from '../TagRest'

import {
  CardRest,
  ContainerDescricaoRest,
  DescricaoRest,
  ImageRest,
  TituloRest
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

export const ProductRestaurant = ({ title, description, image }: Props) => (
  <CardRest>
    <ImageRest src={image} alt={title} />
    <ContainerDescricaoRest>
      <TituloRest>{title}</TituloRest>
      <DescricaoRest>{description}</DescricaoRest>
      <Link to="/restaurantes">
        <TagRest>Adicionar ao carrinho</TagRest>
      </Link>
    </ContainerDescricaoRest>
  </CardRest>
)

export default ProductRestaurant

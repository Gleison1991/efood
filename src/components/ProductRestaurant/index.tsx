import { useState } from 'react'
import { Link } from 'react-router-dom'
import TagRest from '../TagRest'

import PizzaMargueritaDoPopUp from '../../assets/images/PizzaMargueritaDoPopUp.png'
import Fechar from '../../assets/images/fechar.png'

import {
  CardRest,
  ContainerDescricaoRest,
  DescricaoRest,
  ImageRest,
  TituloRest,
  PopUp,
  Overlay,
  CloseButton,
  PopUpContent,
  PopUpImage,
  PopUpText,
  ButomPopUp
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

type PopUpDoPrato = {
  type: 'image'
  url: string
  title: string
  description: string
}

const mock: PopUpDoPrato[] = [
  {
    type: 'image',
    url: PizzaMargueritaDoPopUp,
    title: 'Pizza Marguerita',
    description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.Serve: de 2 a 3 pessoas'
  }
]

export const ProductRestaurant = ({ title, description, image }: Props) => {
  const [mostrarPopUp, definirMostrarPopUp] = useState(false)

  const lidarComClique = () => {
    definirMostrarPopUp(true)
  }

  const fecharPopUp = () => {
    definirMostrarPopUp(false)
  }

  return (
    <CardRest>
      <ImageRest src={image} alt={title} />
      <ContainerDescricaoRest>
        <TituloRest>{title}</TituloRest>
        <DescricaoRest>{description}</DescricaoRest>
        <Link to="/restaurantes" onClick={lidarComClique}>
          <TagRest>Adicionar ao carrinho</TagRest>
        </Link>
        {mostrarPopUp && (
          <Overlay onClick={fecharPopUp}>
            <PopUp onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={fecharPopUp}>
                <img src={Fechar} alt="Fechar" />
              </CloseButton>
              <PopUpContent>
                <PopUpImage src={mock[0].url} alt="PopUp" />
                <PopUpText>
                  <h2>{mock[0].title}</h2>
                  <p>{mock[0].description}</p>
                  <ButomPopUp>Adicionar ao carrinho - R$ 60,90</ButomPopUp>
                </PopUpText>
              </PopUpContent>
            </PopUp>
          </Overlay>
        )}
      </ContainerDescricaoRest>
    </CardRest>
  )
}

export default ProductRestaurant

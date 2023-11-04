import PratoRestaurante from '../../models/PratoRestaurante'
import { ProductRestaurant } from '../ProductRestaurant'

import PizzaMargueritaDoPopUp from '../../assets/images/PizzaMargueritaDoPopUp.png'

import { Container, List } from './styles'
// Para iniciar a tarefa do projeto 2. assistir
//Crie a galeria Parte 2. a partir do minuto 07:20
// que é o ínicio de como fazer o mock
export type Props = {
  pratosRestaurante: PratoRestaurante[]
}

type PopUpDoPrato = {
  type: 'image'
  url: string
}

const mock: PopUpDoPrato[] = [
  {
    type: 'image',
    url: PizzaMargueritaDoPopUp
  }
]

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

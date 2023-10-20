import { Imagem } from './styles'

import bannerImg from '../../assets/images/Vector.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </div>
  </Imagem>
)
//continuar do minuto 10:37
export default Banner

import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Titulo>
    </div>
    <a href="#">
      <img src={logo} alt="Efood" />
    </a>
  </Imagem>
)
//continuar do minuto 10:37
export default Banner

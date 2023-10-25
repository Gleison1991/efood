import { Imagem, Logo, Titulo } from './styles'

import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Logo src={logo} alt="Efood" />
      <Titulo>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Titulo>
    </div>
  </Imagem>
)

export default Banner

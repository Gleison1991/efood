import { Link } from 'react-router-dom'

import { HeaderBar, TituloHome } from './styles'

import logo from '../../assets/images/logo.png'

const HeaderHome = () => (
  <HeaderBar>
    <Link to="/">
      <img src={logo} alt="EFOOD" />
    </Link>
    <TituloHome>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </TituloHome>
  </HeaderBar>
)

export default HeaderHome

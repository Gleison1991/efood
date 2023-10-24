import { HeaderContainer, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <nav>
      <Links>
        <LinkItem>
          <Link to="/perfil">Restaurantes</Link>
        </LinkItem>
      </Links>
    </nav>
    <div>
      <img src={logo} alt="Efood" />
    </div>
    <LinkCart href="/carrinho">0 - produto(s) no carrinho</LinkCart>
  </HeaderContainer>
)

export default Header

import { HeaderContainer, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <nav>
      <Links>
        <LinkItem as={Link} to="/">
          Restaurantes
        </LinkItem>{' '}
        {''}
      </Links>
    </nav>
    <img src={logo} alt="Efood" />
    <nav>
      <Links>
        <LinkCart as={Link} to="/carrinho">
          0 - produto(s) no carrinho
        </LinkCart>{' '}
        {''}
      </Links>
    </nav>
  </HeaderContainer>
)

export default Header

import { HeaderContainer, LinkItem, LinkCart, Headerbar } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <Headerbar>
      <LinkItem as={Link} to="/">
        Restaurantes
      </LinkItem>{' '}
      {''}
      <img src={logo} alt="Efood" />
      <LinkCart as={Link} to="/carrinho">
        0 - produto(s) no carrinho
      </LinkCart>{' '}
      {''}
    </Headerbar>
  </HeaderContainer>
)

export default Header

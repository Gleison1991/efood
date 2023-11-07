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
      <Link to="/">
        <img src={logo} alt="Efood" title="Voltar a página inicial" />
      </Link>
      <LinkCart as={Link} to="/carrinho">
        0 - produto(s) no carrinho
      </LinkCart>{' '}
      {''}
    </Headerbar>
  </HeaderContainer>
)

export default Header

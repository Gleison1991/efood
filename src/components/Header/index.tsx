import { HeaderBar, LinkRestaurante, Logo, Produto } from './styles'
import logoImage from '../../assets/images/logo.png'

interface HeaderProps {
  numProdutos: number
}

const Header: React.FC<HeaderProps> = ({ numProdutos }) => (
  <HeaderBar>
    <LinkRestaurante href="/restaurantes">Restaurantes</LinkRestaurante>
    <Logo src={logoImage} alt="Logo" />
    <Produto>{numProdutos} produto(s) no carrinho</Produto>
  </HeaderBar>
)

export default Header

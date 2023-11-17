// tinha LinkCart que foi removido e deu lugar a CartButton
import { HeaderContainer, LinkItem, CartButton, Headerbar } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <Headerbar>
        <LinkItem as={Link} to="/">
          Restaurantes
        </LinkItem>{' '}
        {''}
        <Link to="/">
          <img src={logo} alt="Efood" title="Voltar a página inicial" />
        </Link>
        <CartButton onClick={openCart}>0 - produto(s) no carrinho</CartButton>{' '}
        {''}
      </Headerbar>
    </HeaderContainer>
  )
}
//tava depois do openCart no LinkCart:   as={Link} to="/carrinho
//agora como CartButton
export default Header

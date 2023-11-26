// tinha LinkCart que foi removido e deu lugar a CartButton
import { HeaderContainer, LinkItem, CartButton, Headerbar } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

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
        <CartButton onClick={openCart}>
          {items.length} - produto(s) no carrinho
        </CartButton>{' '}
        {''}
      </Headerbar>
    </HeaderContainer>
  )
}
//tava depois do openCart no LinkCart:   as={Link} to="/carrinho
//agora como CartButton
export default Header

import { HeaderContainer, LinkItem, CartButton, Headerbar } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useGetFeaturedPratoQuery } from '../../services/api'

const Header = () => {
  const { data: prato, isLoading } = useGetFeaturedPratoQuery()

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (!prato) {
    return <h3>Carregando...</h3>
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
        <CartButton onClick={openCart} title={'Veja seu carrinho'}>
          {items.length} - produto(s) no carrinho
        </CartButton>{' '}
        {''}
      </Headerbar>
    </HeaderContainer>
  )
}

export default Header

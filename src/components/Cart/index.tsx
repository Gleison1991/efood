import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import Button from '../Button'
import pizzaCarrinho from '../../assets/images/pizzacarrinho.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  interface Item {
    preco?: number
    image: string
    infos: string[]
    title: string
    description: string
    id: number
  }

  const getTotalPrice = (items: Item[]): number => {
    return items.reduce((acumulador: number, item: Item): number => {
      if (item.preco !== undefined) {
        return acumulador + item.preco
      } else {
        return acumulador
      }
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={pizzaCarrinho} />
              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total <span>{formataPreco(getTotalPrice(items))} </span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

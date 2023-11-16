import Button from '../Button'

import pizzaCarrinho from '../../assets/images/pizzacarrinho.png'

import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizzaCarrinho} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizzaCarrinho} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizzaCarrinho} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        Valor total <span>R$ 182, 70</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart

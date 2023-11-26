import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 16px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    height: 24px;
    border: none;
    color: ${cores.rosa};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 4px 93px 4px 93px;
  }
`

export const Quantity = styled.p`
  display: flex;
  gap: 211px;
  line-height: normal;
  margin-top: 40px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.rosaClaro};
  margin-bottom: 16px;

  span {
    display: block;
    font-size: 14px;
    color: ${cores.rosaClaro};
  }
`

export const Prices = styled.p`
  display: flex;
  gap: 211px;
  line-height: normal;
  margin-top: 40px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.rosaClaro};
  margin-bottom: 16px;

  span {
    display: block;
    font-size: 14px;
    color: ${cores.rosaClaro};
  }
`

export const CartItem = styled.li`
  width: 344px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;
  background-color: ${cores.rosaClaro};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.rosa};
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.rosa};
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 74px;
    right: 8px;
  }
`

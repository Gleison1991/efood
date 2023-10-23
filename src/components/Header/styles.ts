import styled from 'styled-components'
import VectorImage from '../../assets/images/Vector.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${VectorImage}) no-repeat center center;
  background-size: cover;
  width: 2031.813px;
  height: 384px;
  top: -24px;
`
export const LinkRestaurante = styled.a`
    color: ${cores.rosa};
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-decoration: none;
  }
`

export const Logo = styled.img`
  margin: 63px 621px 65px;
  width: 1366px;
  height: 280px;
`

export const Produto = styled.p`
  margin: 82px 0 83px; // Adicionado margens
  width: 256px; // Adicionado largura
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  line-height: normal;
`

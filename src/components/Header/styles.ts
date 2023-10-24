import styled from 'styled-components'
import { cores } from '../../styles'

import ImagemDeFundo from '../../assets/images/Vector.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 186px;
  top: -24px;
  background-image: url(${ImagemDeFundo});
  background-size: cover;

  div {
    img {
      width: 125px;
      height: auto;
    }
  }

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${cores.rosa};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-decoration: none;
`

export const LinkItem = styled.li`
  margin-left: 116px; // Ajuste este valor conforme necessário
`

export const LinkCart = styled.a`
  display: flex;
  margin-right: 171px;
`

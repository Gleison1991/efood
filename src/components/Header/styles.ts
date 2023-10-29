import { styled } from 'styled-components'
import { cores } from '../../styles'

import Vector from '../../assets/images/Vector.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 186px;
  top: -24px;
  background-image: url(${Vector});
  background-size: cover;

  nav {
    width: calc(50% - 75px - 150px);
  }

  img {
    width: 125px;
    height: auto;
    margin: auto;
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
export const LinkItem = styled.li``

export const LinkCart = styled.a``

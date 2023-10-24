import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import VectorImage from '../../assets/images/Vector.png'
import { cores } from '../../styles'

export const GlobalCss = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }

  body {
    background-color: ${cores.brancoBeije};
    color: ${cores.rosa};
    padding-top: 0px;
    display: block;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${VectorImage}) no-repeat center center;
  background-size: cover;
  width: 2031.813px;
  height: 384px;
  top: -24px;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`
export const Links = styled.ul`
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

export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;
`

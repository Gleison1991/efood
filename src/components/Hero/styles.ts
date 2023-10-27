import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 280px;
  max-width: 1366px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
    width: 101px;
    height: 33px;
    color: ${cores.branco};
    font-weight: 100;
    margin-bottom: 156px;
    margin-left: -30px;
    opacity: 0.56;
  }

  p {
    font-size: 32px;
    color: ${cores.branco};
    font-weight: bold;
    width: 676px;
    height: 33px;
    text-align: left;
    margin-left: -30px;
  }
`

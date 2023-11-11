import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 280px;

  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: ${cores.preto};
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
//h2 margin-bottom: 156px;
export const Infos = styled.div`
  padding: 9px;
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
    font-style: normal;
    width: 676px;
    height: 33px;
    text-align: left;
    margin-left: -25px;
    flex-shrink: 0;
  }
`

import { cores } from '../../styles'
import styled from 'styled-components'
import Vector from '../../assets/images/Vector.png'

export const HeaderBar = styled.header`
  background-color: ${cores.rosaClaro};
  background-image: url(${Vector});
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 384px;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const TituloHome = styled.h3`
  color: ${cores.rosa};
  text-decoration: none;
  margin-top: 138px;
  font-size: 36px;
  font-weight: bold;
`

import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.5);

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.05;
  }

  .container {
    zindex: 1;
    position: relative;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branco};
  font-weight: bold;
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  padding: 24px;
  text-align: left;
  margin-left: -20px;
`

export const TituloDoPrato = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: bold;
  padding: 24px;
  text-align: left;
  margin-left: -20px;
  margin-top: 100px;
`

import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`
export const SubTitulo = styled.p`
  width: 101px;
  height: 33.25px;
  flex-shrink: 0;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  line-height: normal;
  margin-left: 180px;
  padding-top: 25px;
`
export const Titulo = styled.h2`
  width: 676px;
  height: 33.25px;
  flex-shrink: 0;
  font-size: 32px;
  color: ${cores.branco};
  font-weight: bold;
  line-height: normal;
  padding-top: 185px;
  padding-bottom: 32px;
`

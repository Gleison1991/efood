import styled from 'styled-components'
import { cores } from '../../styles'

export const CardRest = styled.div`
  background-color: ${cores.rosa};
  border: 0px solid ${cores.rosa};
  position: relative;
  width: 320px;
  padding-top: 8px;
`
export const ImageRest = styled.img`
  object-fit: cover;
  width: 304px;
  height: 167px;
`

export const ContainerDescricaoRest = styled.div`
  padding: 8px;
  width: 304px;
  text-align: left;
  margin-top: -10px;
  color: ${cores.branco};
`

export const TituloRest = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.rosaClaro};
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  text-align: left;
`
export const DescricaoRest = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosaClaro};
  display: block;
  text-align: left;
  padding-bottom: 10px;
`

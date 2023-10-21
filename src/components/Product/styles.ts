import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};
`
export const ContainerDescricao = styled.div`
  padding: 8px;
  text-align: left;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  text-align: left;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosa};
  display: block;
  text-align: left;
`

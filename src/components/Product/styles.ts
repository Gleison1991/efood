import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-top: -90px;
  margin-right: 40px;
  margin-left: -20px;
  margin-bottom: 90px;
`
export const Image = styled.img`
  object-fit: cover;
  width: 486px;
  height: 217px;
`

export const ContainerDescricao = styled.div`
  padding: 8px;
  text-align: left;
`
export const ConDesc = styled.div`
  justify-content: space-between;
  display: flex;
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
  padding-bottom: 20px;
`

export const Infos = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 12px;
`
export const Avaliacao = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};
  margin-bottom: 16px;
  margin-right: 8px;
`

export const Estrela = styled.img`
  object-fit: cover;
  width: 21px;
  height: 21px;
  margin-bottom: 15px;
`

export const Destaques = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.brancoBeije};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`

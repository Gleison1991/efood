import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 4px 84px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 4px 84px;
  text-decoration: none;
`

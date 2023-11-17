import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const TagContainer = styled.button<Props>`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 84px;
  display: inline-block;
  width: 304px;
  border: 0px solid ${cores.rosa};
  text-align: center;

  &:hover {
    background-color: ${cores.HoverDoRosa};
    color: ${cores.rosaClaro};
    transform: scale(1.02);
    transition: transform 0.2s;
  }
`

import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.brancoBeije};
  font-size: 14px;
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 84px' : '4px 6px')};
  display: inline-block;

  &:hover {
    background-color: ${cores.rosaDoHover};
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`

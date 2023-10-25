import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.brancoBeije};
  font-size: ${(props) => (props.size === 'big' ? '24' : '14')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 84px' : '4px 6px')};
  display: inline-block;

  &:hover {
    background-color: ${cores.rosaDoHover};
  }
`

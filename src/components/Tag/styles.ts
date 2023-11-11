import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  font-family: Roboto;
  line-height: normal;
  padding: 4px 6px;
  display: inline-block;
  text-align: center;
  width: 82px;
  height: 24px;
  flex-shrink: 0;

  &:hover {
    background-color: ${cores.rosaDoHover};
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`

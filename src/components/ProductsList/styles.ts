import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.section<Omit<Props, 'Pink'>>`
  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  grid-gap: 48px;
`

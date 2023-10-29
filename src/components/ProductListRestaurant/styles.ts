import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.section<Omit<Props, 'Pink'>>`
  padding: 80px 0;
  max-width: 100%;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 38px;
  margin-top: -20px;
  margin-bottom: 80px;
  margin-left: -15px;
`

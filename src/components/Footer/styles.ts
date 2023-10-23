import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  width: 1366px;
  height: 298px;
  background: ${cores.rosaClaro};
  box-sizing: border-box;
  width: 100vw;
`

export const Logo = styled.div`
  width: 125px;
  height: 58px;
  flex-shrink: 0;
  margin-bottom: 40px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`

export const IconLink = styled.a`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`

export const FooterText = styled.p`
  width: auto;
  color: ${cores.rosa};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  margin-top: auto;
`

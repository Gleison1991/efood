import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  height: 298px;
  background: ${cores.rosaClaro};
  box-sizing: border-box;
  width: 100%;
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
export const Icon = styled.img`
  width: 24px;
  height: 24px;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.2s;
  }
`

export const IconLink = styled.a`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
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

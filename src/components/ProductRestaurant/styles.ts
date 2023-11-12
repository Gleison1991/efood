import styled from 'styled-components'
import { cores } from '../../styles'

export const CardRest = styled.div`
  background-color: ${cores.rosa};
  border: 0px solid ${cores.rosa};
  position: relative;
  width: 320px;
  padding-top: 8px;
`
export const ImageRest = styled.img`
  object-fit: cover;
  width: 304px;
  height: 167px;
`

export const ContainerDescricaoRest = styled.div`
  padding: 8px;
  width: 304px;
  text-align: left;
  margin-top: -10px;
  color: ${cores.branco};
`

export const TituloRest = styled.h3`
  font-weight: bold;
  font-style: normal;
  font-size: 16px;
  color: ${cores.rosaClaro};
  display: block;
  margin-top: 6px;
  margin-bottom: 8px;
  text-align: left;
  line-height: normal;
`
export const DescricaoRest = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosaClaro};
  display: block;
  text-align: left;
  padding-bottom: 8px;
  white-space: pre-line;
`

export const PopUp = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.rosa};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-sizing: border-box;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`
export const PopUpContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px;
`

export const PopUpImage = styled.img`
  width: 280px;
  height: 280px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  margin-right: 24px;
`

export const PopUpText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  h2 {
    width: 140px;
    height: 21px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  h3 {
    width: 656px;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 16px;
    line-height: 22px;
    margin-top: 30px;
    margin-bottom: -4px;
    color: ${cores.branco};
  }
`

export const PopUpTitle = styled.h2`
  color: ${cores.branco};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`

export const PopUpDescription = styled.p`
  width: 656px;
  color: ${cores.branco};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

export const ButomPopUp = styled.button`
  cursor: pointer;
  width: 218px;
  height: 24px;
  color: ${cores.rosa};
  background-color: ${cores.rosaClaro};
  border: none;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 7px;
  margin-top: 16px;

  &:hover {
    color: ${cores.preto};
  }
`

export const PopUpButton = styled.button`
  width: 218px;
  height: 24px;
  color: ${cores.rosaClaro};
  background-color: ${cores.brancoBeije};
  border-radius: 4px 4px 7px 7px;
  margin-bottom: 59px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`

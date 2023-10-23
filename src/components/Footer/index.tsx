import { Container, IconLink, FooterText, Logo, SocialIcons } from './styles'

import logo from '../../assets/images/logo.png'
import facebookLogo from '../../assets/images/facebookLogo.png'
import instagramLogo from '../../assets/images/instagramLogo.png'
import twitterLogo from '../../assets/images/twitterLogo.png'

const Footer = () => (
  <Container>
    <Logo>
      <img src={logo} alt="Logo" />
    </Logo>
    <SocialIcons>
      <IconLink href="https://www.facebook.com/seu_usuario">
        <img src={facebookLogo} alt="Facebook" />
      </IconLink>
      <IconLink href="https://www.instagram.com/seu_usuario">
        <img src={instagramLogo} alt="Instagram" />
      </IconLink>
      <IconLink href="https://twitter.com/seu_usuario">
        <img src={twitterLogo} alt="Twitter" />
      </IconLink>
    </SocialIcons>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.{' '}
    </FooterText>
  </Container>
)

export default Footer

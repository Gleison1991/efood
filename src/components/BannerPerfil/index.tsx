import { Imagem, Titulo, SubTitulo } from './styles'

import bannerPerfilImg from '../../assets/images/comidaItalianaa.png'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${bannerPerfilImg})` }}>
    <div className="container">
      <SubTitulo>Italiana</SubTitulo>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default BannerPerfil

import { Imagem, Titulo, TituloDoPrato } from './styles'
import bannerPerfilImg from '../../assets/images/comidaItalianaa.png'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${bannerPerfilImg})` }}>
    <div className="container">
      <div>
        <Titulo>Italiana</Titulo>
        <TituloDoPrato>La Dolce Vita Trattoria</TituloDoPrato>
      </div>
    </div>
  </Imagem>
)

export default BannerPerfil

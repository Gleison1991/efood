import bannerImg from '../../assets/images/comidaItaliana.png'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Infos>
        <h2>Italiana</h2>
        <p>La Dolce Vita Trattoria</p>
      </Infos>
    </div>
  </Banner>
)

export default Hero

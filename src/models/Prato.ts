class Prato {
  image: string
  infos: string[]
  title: string
  description: string
  id: number
  preco: number

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    description: string,
    preco: number
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.description = description
    this.preco = preco
  }
}

export default Prato

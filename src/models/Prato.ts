class Prato {
  image: string
  infos: string[]
  title: string
  description: string
  id: number

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.description = description
  }
}

export default Prato

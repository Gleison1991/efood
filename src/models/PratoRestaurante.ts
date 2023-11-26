class PratoRestaurante {
  image: string
  title: string
  description: string
  id: number
  infos: any
  preco: number | undefined

  constructor(id: number, image: string, title: string, description: string) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
  }
}

export default PratoRestaurante

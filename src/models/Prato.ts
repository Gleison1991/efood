class Prato {
  capa: string
  infos: string[]
  titulo: string
  descricao: string
  id: number
  preco: number
  avaliacao: string
  nome: string

  constructor(
    id: number,
    capa: string,
    infos: string[],
    titulo: string,
    descricao: string,
    preco: number,
    avaliacao: string,
    nome: string
  ) {
    this.id = id
    this.capa = capa
    this.infos = infos
    this.titulo = titulo
    this.descricao = descricao
    this.preco = preco
    this.avaliacao = avaliacao
    this.nome = nome
  }
}

export default Prato

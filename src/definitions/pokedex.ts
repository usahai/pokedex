export interface PokedexIndexData {
  name: string
  url: string
}

export interface PokedexData {
  count: number
  next: string
  previous: string
  results: PokedexIndexData[]
}

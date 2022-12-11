export interface PokedexItemData {
  name: string
  url: string
}

export interface PokedexData {
  count: number
  next: string
  previous: string
  results: PokedexItemData[]
}

export interface PokedexInfiniteQueryResponse {
  response: PokedexItemData[]
  nextPage: string
}

export type PokedexQueryResponse = PokedexInfiniteQueryResponse[] | undefined

export interface Word {
  word: string | RegExp

  links?: string[]
  description?: string
}
export type Words = Word[]
export const defineWords = (words: Words): Words => words

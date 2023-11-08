import type { Words, Word } from "../dataset/define.ts"

export interface AnalyzerInit {
  dataset: Words
}

export type AnalyzeResult = {
  found: string
  detail: Readonly<DataSetData>
  char: number
}[]
export interface DataSetData extends Word {
  word: RegExp
}
/**
 * Sensaty Analyzer Class
 * @example
 * ```ts
 * const analyzer = new Analyzer()
 * ```
 */
export class Analyzer {
  dataset: DataSetData[]
  constructor (init: AnalyzerInit) {
    this.dataset = init.dataset.map(word => {
      let wordRegExp: RegExp
      if (word.word instanceof RegExp) {
        wordRegExp = word.word
      } else {
        wordRegExp = new RegExp(word.word.replace(/\/\+\[\]\./g, s => '\\' + s), 'g')
      }
      return {
        ...word,
        word: wordRegExp
      }
    })
  }
  analyze (text: string) {
    const result: AnalyzeResult = []
    for (const datasetData of this.dataset) {
      const regexp = new RegExp(datasetData.word)
      let arr
      while ((arr = regexp.exec(text)) !== null) {
        result.push({
          found: arr[0],
          detail: Object.freeze(datasetData),
          char: arr.index
        })
      }
    }
    return result
  }
}
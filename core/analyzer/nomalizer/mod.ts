type ReplaceParams =
  [string | RegExp, string] |
  [string | RegExp, (substring: string, ...args: any[]) => string]

export const nomalizeDatas: ReplaceParams[] = [
  ['…', '...'],
  ['～', '-'],
  ['ー', '-']
]
export const nomalize = (target: string) => {
  for (const nomalizeData of nomalizeDatas) {
    // @ts-expect-error
    target = target.replaceAll(...nomalizeData)
  }
  return target
}

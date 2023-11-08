import { Analyzer, type AnalyzeResult } from '../../../core/analyzer/mod'
import dataset from '../../../core/dataset/mod'
import { createSignal, createMemo, For } from 'solid-js'
export default (props: {
  targetText: string
}) => {
  const analyzer = new Analyzer({
    dataset,
  })
  const [result, setResult] = createSignal<AnalyzeResult>([])
  createMemo(() => {
    setResult(analyzer.analyze(props.targetText))
  })
  return <div>
    <div>
      {result().length}個の問題
    </div>
    {
      result().map(data => {
        return <div>
          <div>
            {data.found} (1:{data.char})はセンシティブな単語の可能性があります。
          </div>
          <details class="bg-gray-200 mx-5 my-1 p-2 rounded-lg">
            <ul class="">
              <For each={data.detail.links || []}>{(url) => <li>
                <a href={url} class="underline hover:no-underline">
                  {url}
                </a>
              </li>}</For>
            </ul>
          </details>
        </div>
      })
    }
  </div>
}
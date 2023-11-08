import Analyzer from "./components/Analyzer"
import { createSignal } from 'solid-js'

function App() {
  const [targetText, setTargetText] = createSignal('')
  return <>
    <div class="text-center">
      <div class="text-3xl">Sensaty</div>
      <div>センシティブな単語を文章から検知するツール</div>
    </div>
    <div class="my-5">
      <div class="px-10">
        <textarea class="w-full border p-1 resize-none rounded" placeholder="ここに対象の文章を入力..." onInput={(e) => setTargetText(e.target.value)}></textarea>
      </div>
      <div class="text-center">
        <Analyzer targetText={targetText()} />
      </div>
    </div>
  </>
}

export default App

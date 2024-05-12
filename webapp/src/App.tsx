import { Show, createSignal } from 'solid-js'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <h3>Welcome to</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        <h1>THE BUTTON</h1>
      </button>
      <h5>Simply do <i>NOT</i> press it</h5>

      <Show when={count() > 0}>
        <h2>Misbehaved {count()} times</h2>
      </Show>
    </>
  )
}

export default App

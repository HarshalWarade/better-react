import './App.css'
import { nanoid } from 'nanoid'

function App() {

  let str = nanoid()

  return (
    <>
      <p>{typeof nanoid()}</p>
    </>
  )
}

export default App

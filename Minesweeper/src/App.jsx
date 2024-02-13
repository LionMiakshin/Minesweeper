import { useState } from 'react'
import './App.css'
import Board from './Components/Board'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Minesweeper</h1>
        <Board/>
      </div>
      
    </>
  )
}

export default App

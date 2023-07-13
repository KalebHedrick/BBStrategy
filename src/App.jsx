import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CanvasDraw from 'react-canvas-draw'
import Header from '../components/pageHead'
const maps = ["map1","map2","map3"]
function App() {
  const [count, setCount] = useState(0)
  const [map, setMap] = useState(maps[0])
  return (<>
    
    <div><text>hi</text>
    <CanvasDraw disabled = 'false' imgSrc='vite.svg'/>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDatas from './pages/UserDatas'

function App() {
  const [count, setCount] = useState(0)

  return (
     <UserDatas/>
  )
}

export default App

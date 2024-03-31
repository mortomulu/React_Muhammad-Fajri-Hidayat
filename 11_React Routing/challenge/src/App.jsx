import Hero from './components/Hero'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </>
  )
}

export default App

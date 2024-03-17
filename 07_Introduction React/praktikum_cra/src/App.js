import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'

function Hero(){
  return <div>ini adalah hero section</div>
}

export default function App() {
  return (
    <div>
      <Navbar/>
      Introduction React
      <div>Halaman div</div>
      <h1>Tag h1</h1>
      <Hero/>
    </div>
  )
}

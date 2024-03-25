import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct'
import CreateAccount from './pages/CreateAccount'

function App() {

  return(
    <Router>
 
        <Routes>
          <Route path='/' element={<CreateAccount/>}/>
          <Route path='/product' element={<CreateProduct/>}/>
        </Routes>
       
    </Router>
  )
}

export default App

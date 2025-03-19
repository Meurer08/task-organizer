import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import './App.css'
import Singup from './components/login/singup'
import Singin from './components/login/singin'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} >
          <Route path='login' element={<Singin />}/>
          <Route path='register' element={<Singup />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

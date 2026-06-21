import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { authService } from './services/authService'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import './App.css'

function App() {
  useEffect(() => {
    authService.getCsrf();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

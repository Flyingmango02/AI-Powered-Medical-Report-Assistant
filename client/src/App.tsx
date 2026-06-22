// Routing imports
import { RouterProvider} from 'react-router-dom'
import { router } from './router/router'

import { useEffect } from 'react'
import { authService } from './services/authService'

import './App.css'

function App() {
  useEffect(() => {
    authService.getCsrf();
  }, []);

  return (
    <RouterProvider router={router}/>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'
import Cart from './components/Cart'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurantes',
    element: <Restaurantes />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <Cart />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App

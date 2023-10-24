import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Banner from './components/Banner'
import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'
import Footer from './components/Footer'

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
// tirei linha 21. entre a div <Banner />
function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>

      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App

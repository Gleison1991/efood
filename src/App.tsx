import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <Banner />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App

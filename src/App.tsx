import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import { GlobalCss } from './styles'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductsList background={'Pink'} />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <Banner />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App

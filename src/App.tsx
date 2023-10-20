import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/'
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <Banner />
    </>
  )
}

export default App

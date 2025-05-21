import { Route, Routes } from 'react-router-dom'
import './App.css'
import BtmHeader from './Components/Layout/Header/BtmHeader'
import TopHeader from './Components/Layout/Header/TopHeader'
import HomePage from './Pages/HomePage'
import ProductDetailes from './Components/Home/SlideProducts/ProductDetailes'
function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Routes>
      
        <Route element={<HomePage />} path='/' />
        <Route element={<ProductDetailes />} path='/products/:id' />
      </Routes>
    </>
  )
}

export default App

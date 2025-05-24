import { Route, Routes } from 'react-router-dom'
import './App.css'
import BtmHeader from './Components/Layout/Header/BtmHeader'
import TopHeader from './Components/Layout/Header/TopHeader'
import HomePage from './Pages/HomePage'
import ProductDetailes from './Components/ProductDetailes/ProductDetailes'
import ShoppingCart from './Components/Cart/ShoppingCart'
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
        <Route element={<ShoppingCart />} path='/cart' />
      </Routes>

    </>
  )
}

export default App

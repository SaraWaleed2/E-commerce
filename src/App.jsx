import { Route, Routes } from 'react-router-dom'
import './App.css'
import BtmHeader from './Components/Layout/Header/BtmHeader'
import TopHeader from './Components/Layout/Header/TopHeader'
import HomePage from './Pages/HomePage'
import ProductDetailes from './Components/ProductDetailes/ProductDetailes'
import ShoppingCart from './Components/Cart/ShoppingCart'
import Scroll from './Components/Scroll'
import CategoryPage from './Components/CategoryPage'
import SearchResults from './Pages/SearchResults'
import FavouriteItems from './Pages/FavouriteItems'
function App() {

  return (
    <>

      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Scroll />

      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<ProductDetailes />} path='/products/:id' />
        <Route element={<ShoppingCart />} path='/cart' />
        <Route element={<FavouriteItems />} path='/favourite' />
        <Route element={<SearchResults />} path='/search' />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>

    </>
  )
}

export default App

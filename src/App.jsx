import './App.css'
import BtmHeader from './Components/Layout/Header/BtmHeader'
import TopHeader from './Components/Layout/Header/TopHeader'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <HomePage />
    </>
  )
}

export default App

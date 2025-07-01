import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderClient from './components/HeaderClient'
import AppRouter from './routers'

function App() {

  return (
    <>
      {/* <AppRouter /> */}
      <Routes>


      <Route path="/" element={<HeaderClient/>} />
      </Routes>

    </>
  )
}

export default App

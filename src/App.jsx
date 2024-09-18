import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import './index.css'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App

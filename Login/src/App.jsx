import './App.css'
import NavBar from "./Components/Common/Navbar/navbar"
import Layout from './Components/Common/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import ConnectContact from './page/ConnectContact'
import ConnectSignUp from './page/ConnectSignUp'
import ConnectLogin from './page/ConnectLogin'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='contact' element={<ConnectContact />}></Route>
          <Route path='signup' element={<ConnectSignUp />}></Route>
          <Route path='signin' element={<ConnectLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

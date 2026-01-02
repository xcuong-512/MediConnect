import './App.css'
import NavBar from "./Components/Common/Navbar/navbar"
import Layout from './Components/Common/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import ConnectContact from './page/ConnectContact'
import ConnectSignUp from './page/ConnectSignUp'
import ConnectLogin from './page/ConnectLogin'
import Aboutus from './Components/Common/Aboutus/Aboutus'
import ConnectAbout from './page/ConnectAbout'
import ConnectDoctorDetail from './page/ConnectDoctorDetail'
import ConnectDoctorInfor from './page/ConnectDoctorInfor'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='contact' element={<ConnectContact />}></Route>
          <Route path='signup' element={<ConnectSignUp />}></Route>
          <Route path='signin' element={<ConnectLogin />}></Route>
          <Route path='aboutus' element={<ConnectAbout />}></Route>
          <Route path='detail' element={<ConnectDoctorDetail />}></Route>
          <Route path="infor/:id" element={<ConnectDoctorInfor />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

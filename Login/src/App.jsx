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
import Search from './Components/Common/Search/Search'
import ConnectDashBoard from './page/ConnectDashBoard'
import Profile from './Components/Common/Profile/Profile'
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
          <Route path="detail/:id" element={<ConnectDoctorInfor />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='dashboard' element={<ConnectDashBoard />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

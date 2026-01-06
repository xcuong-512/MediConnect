import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './page/Home';
import ConnectLogin from './page/ConnectLogin';
import ConnectSignUp from './page/ConnectSignUp';
import ConnectDoctorDetail from './page/ConnectDoctorDetail';
import ConnectAbout from './page/ConnectAbout';
import ConnectContact from './page/ConnectContact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<ConnectLogin />} />
        <Route path='/signup' element={<ConnectSignUp />} />
        <Route path='/about' element={<ConnectAbout />} />
        <Route path='/contact' element={<ConnectContact />} />
        <Route path='/doctor/:id' element={<ConnectDoctorDetail />} />
      </Routes>
    </>
  )
}

export default App
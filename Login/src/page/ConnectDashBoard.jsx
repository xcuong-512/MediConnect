import React from 'react'
import Layout from '../Components/Common/Layout'
import Complete from '../Components/Common/Navbar/Complete'
import Footer from '../Components/Common/Footer'
import Home from './Home'
import Hero from '../Components/Common/Hero'
import Services from '../Components/Services/Services'
import MedicalServices from '../Components/Services/MedicalServices'
function ConnectDashBoard() {
    return (
        <>
            <Complete />
            <Hero />
            <Services />
            <MedicalServices />
            <Footer />

        </>
    )
}

export default ConnectDashBoard

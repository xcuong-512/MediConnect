import React from 'react'
import Layout from '../Components/Common/Layout'
import Hero from '../Components/Common/Hero'
import Services from '../Components/Services/Services'
import MedicalServices from '../Components/Services/MedicalServices'
function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <Services />
                <MedicalServices />
            </Layout>

        </>
    )
}

export default Home

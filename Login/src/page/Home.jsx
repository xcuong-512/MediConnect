import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Common/Hero';
import Social from '../Components/SocialMedia/Social';
import Layout from '../Components/Common/Layout';
import Services from '../Components/Services/Services';
import MedicalServices from '../Components/Services/MedicalServices';
import FeaturedDoctors from '../Components/DoctorDetail/FeaturedDoctors';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Services />
            <MedicalServices />
            <FeaturedDoctors />
            <Social />
        </Layout>
    );
};

export default Home;
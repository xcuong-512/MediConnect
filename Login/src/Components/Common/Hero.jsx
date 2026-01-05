import React, { useEffect } from 'react'
import './Hero.css'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Hero() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const handleSearch = () => {
        navigate(`/search?specialty=${keyword}`);
    };


    return (
        <>
            <div className='main-hero'>
                <div className='hero-title'>
                    Platform for Medical Appointments, Dental Care & Beauty Services
                </div>
                <div className='search-container'>
                    <input type="text" placeholder='Search Doctors by Specialty ' className='search-bar' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                    <FaSearch onClick={handleSearch} className='search-icon' />
                </div>
                <div className='ai-title'>
                    Service Support Products
                </div>

                <div className='ai-support-container'>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/499773/calendar.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Booking Support</p>
                            <p className='box-text'>Find doctors, medical facilities, and book appointments.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://cdn.bookingcare.vn/fo/w828/2025/09/09/142548-phauthuatthammy.png" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Aesthetic Support</p>
                            <p className='box-text'>Find reputable clinics and top-rated plastic surgeons.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/318506/wash-teeth.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Orthodontic Support</p>
                            <p className='box-text'>Find reputable clinics and experienced orthodontists.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://cdn.bookingcare.vn/fo/w1920/2025/09/09/142548-dalieutrimun.png" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Acne Treatment Support</p>
                            <p className='box-text'>Find doctors, services, and facilities specializing in acne care..</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/122960/tooth.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Dental Trip</p>
                            <p className='box-text'>Dental Tourism Platform Exclusively for Foreigners.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/345371/reminder-notice-drug-alert-healthy-medicine-healthcare.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Diagnostic Support</p>
                            <p className='box-text'>Diagnosing patient signs and symptoms</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero

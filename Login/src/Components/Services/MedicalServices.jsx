import React from 'react'
import './MedicalServices.css';
import data from '../Common/data/Specialty.json';
import special from '../Common/data/facility.json';
import MedicalChild from './MedicalChild';
import Hospital from './Hospital';
import Doctor from './Doctor';
import DoctorRemote from './DoctorRemote';
import Healing from './Healing';
import Handbook from './Handbook';
import Social from '../SocialMedia/Social';
import Ideal from './Ideal';
function MedicalServices() {

    return (
        <>
            <div className='main-medical'>


                <div className='medical-title'>
                    <h4 className='high-4'>Medical Specialties</h4>
                    <a href="/" class="btn-xem-them">
                        <span>View more</span>
                    </a>
                </div>

                <div className='specialty-scroll-wrapper'>
                    <div className='specialty-list-container'>
                        {data.map((m, index) => (
                            <MedicalChild key={m.id || index} medical={m} />
                        ))}
                    </div>
                </div>


            </div>

            <div className='main-medical'>
                <div className='medical-title'>
                    <h4 className='high-4'>Healthcare Facilities</h4>
                    <a href="/" class="btn-xem-them">
                        <span>View More</span>
                    </a>
                </div>
                <div className='specialty-scroll-wrapper'>
                    <div className='specialty-list-container'>
                        {special.map((s, index) => (
                            <Hospital key={s.id || index} hospital={s} />
                        ))}
                    </div>
                </div>



            </div>

            <Doctor />
            <DoctorRemote />
            <Healing />
            <Handbook />
            <Social />
            <Ideal />

        </>
    )
}

export default MedicalServices

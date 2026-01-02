import React from 'react'
import "./DoctorRemote.css"
import ChildRemote from './ChildRemote'
import working from "../Common/data/WorkingRemote.json";
function DoctorRemote() {
    return (
        <>
            <div className='doctor-remote'>
                <div className='medical-title'>
                    <h4 className='high-4'>Telehealth</h4>
                    <a href="/" className="btn-xem-them">
                        <span>View more</span>
                    </a>
                </div>
                <div className='specialty-scroll-wrapper'>
                    <div className='specialty-list-container'>
                        {working.map((w, index) => (
                            <ChildRemote key={w.id || index} working={w} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorRemote

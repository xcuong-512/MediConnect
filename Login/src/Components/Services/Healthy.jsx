import React from 'react'
import "./Healthy.css"
import strong from "../Common/data/HealStrong.json";
import HealthyChild from './HealthyChild';
function Healthy() {
    return (
        <>
            <div className='main-healthy'>
                <div className='medical-title'>
                    <h4 className='high-4'>Lifelong Wellness</h4>
                    <a href="/" className="btn-xem-them">
                        <span>View more</span>
                    </a>
                </div>

                <div className='specialty-scroll-wrapper'>
                    <div className='specialty-list-container'>
                        {strong.map((s, index) => (
                            <HealthyChild key={s.id || index} stronger={s} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Healthy

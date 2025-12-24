
import React from 'react'
import "./MedicalChild.css"
function MedicalChild({ medical }) {
    return (
        <>
            <div className='specialty-item'>
                <a href="/" className='specialty-link'>
                    <div className='image-box'>
                        <img className='medical-image' src={medical.image} alt={medical.title} />
                    </div>
                    <h3>{medical.title}</h3>
                </a>
            </div>

        </>
    )
}

export default MedicalChild

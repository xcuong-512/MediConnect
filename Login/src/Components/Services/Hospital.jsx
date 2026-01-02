import React from 'react'

function Hospital({ hospital }) {
    return (
        <div className='specialty-item'>
            <a href="/" className='specialty-link'>
                <div className='image-box'>
                    <img className='medical-image' src={hospital.image} alt={hospital.title} />
                </div>
                <h4>{hospital.title}</h4>

            </a>
        </div>
    )
}

export default Hospital

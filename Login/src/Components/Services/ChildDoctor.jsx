import React from 'react'
import "./ChildDoctor.css"
function ChildDoctor({ doctor }) {
    return (
        <>
            <div className='doctor-card'>
                <a href="/" className='doctor-link'>
                    <div className='image-wrapper'>
                        <img src={doctor.image} alt={doctor.position} />
                    </div>
                    <h3 class="name"> {doctor.position} {doctor.name} </h3>
                    <p class="specialty">{doctor.specialty}</p>
                </a>
            </div>
        </>
    )
}

export default ChildDoctor

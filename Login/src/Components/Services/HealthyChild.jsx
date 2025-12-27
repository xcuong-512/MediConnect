import React from 'react'

function HealthyChild({ stronger }) {

    console.log(stronger.image);
    return (

        <>
            <div className='specialty-item'>
                <a href="/" className='specialty-link'>
                    <div className='image-box'>
                        <img style={{ borderRadius: "28px" }} className='medical-image' src={stronger.image} alt={stronger.title} />
                    </div>
                    <h3 style={{ fontSize: "15px" }}>{stronger.title}</h3>

                </a>
            </div>
        </>
    )
}

export default HealthyChild

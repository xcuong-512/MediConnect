import React from 'react'

function HealingChild({ minder }) {
    return (
        <>
            <div className='specialty-item'>
                <a href="/" className='specialty-link'>
                    <div className='image-box'>
                        <img className='medical-image' src={minder.image} alt={minder.title} />
                    </div>
                    <h3>{minder.title}</h3>

                </a>
            </div>
        </>
    )
}

export default HealingChild

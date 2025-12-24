import React from 'react'

function HandleChild({ hand }) {
    return (
        <>
            <div className='specialty-item'>
                <a href="/" className='specialty-link'>
                    <div className='image-box'>
                        <img className='medical-image' src={hand.image} alt={hand.title} />
                    </div>
                    <h3>{hand.title}</h3>
                </a>
            </div>
        </>
    )
}

export default HandleChild

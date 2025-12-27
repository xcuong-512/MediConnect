import React from 'react'
function HandleChild({ hand }) {
    return (
        <>
            <div className='specialty-item'>
                <a href="/" className='specialty-link'>
                    <div className='image-box'>
                        <img style={{ borderRadius: "26px" }} className='medical-image' src={hand.image} alt={hand.title} />
                    </div>
                    <h3 style={{ fontSize: "15px" }} className='hand-title'>{hand.title}</h3>
                </a>
            </div>
        </>
    )
}

export default HandleChild

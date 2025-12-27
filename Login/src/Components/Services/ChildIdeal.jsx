import React from 'react'

function ChildIdeal({ content }) {
    return (
        <>
            <div className='specialty-item'>
                <a href="/" className='specialty-link'>
                    <div className='image-box'>
                        <img style={{ borderRadius: "26px" }} className='medical-image' src={content.image} alt={content.title} />
                    </div>
                    <h3 style={{ fontSize: "15px" }} className='hand-title'>{content.title}</h3>
                </a>
            </div>
        </>
    )
}

export default ChildIdeal

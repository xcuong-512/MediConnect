import React from 'react'

function ChildRemote({ working }) {
    console.log(working.title)
    return (
        <>
            <div className='specialty-item'>
                <a href="/" className='specialty-link'>
                    <div className='image-box'>
                        <img className='medical-image' src={working.image} alt={working.title} />
                    </div>
                    <h3>{working.title}</h3>
                </a>
            </div>
        </>
    )
}

export default ChildRemote

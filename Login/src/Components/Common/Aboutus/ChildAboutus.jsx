import React from 'react'
import "./ChildAboutus.css";
function ChildAboutus({ about }) {
    return (
        <>
            <div className='box-about'>
                <div className='about-image'>
                    <img src={about.image} alt="" />
                </div>
                <h3 className='spider-title'>{about.title}</h3>
                <span className='bat-title'>{about.description}</span>
            </div>

        </>
    )
}

export default ChildAboutus

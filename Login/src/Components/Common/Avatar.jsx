import React from 'react'
import Footer from './Footer'
import Complete from './Navbar/Complete'
function Avatar({ children }) {
    return (
        <>
            <Complete />
            {children}
            <Footer />
        </>
    )
}

export default Avatar

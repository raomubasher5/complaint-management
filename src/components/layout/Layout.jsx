import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='main-content  min-h-screen pt-12'>{children}</div>
            <Footer />
        </>
    )
}

export default Layout

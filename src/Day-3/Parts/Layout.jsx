import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <Header/>
                </div>
            </div>
            <div className='row'>
                <Outlet/>
            </div>
            <div className='row'>
                <div className='col'>
                    <Footer/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout
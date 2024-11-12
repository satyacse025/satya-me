import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MasterLayout() {
    return (
        <div className='dark:bg-black'>
       
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
       
    )
}

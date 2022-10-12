import React from 'react'
import Header from '../../component/Header/Header';
import Navbar from '../../component/Navbar/Navbar';
import {Outlet} from 'react-router-dom'
function Admin() {
  return (
    <div>
        <Header ></Header>
        <div className='w-full min-h-[90vh] grid grid-cols-12'>
            <Navbar ></Navbar>
            <div className='w-full col-span-10 p-4'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Admin




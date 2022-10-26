import React, { useEffect } from 'react'
import Header from '../../component/Header/Header';
import Navbar from '../../component/Navbar/Navbar';
import {Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios';

function Admin() {
  const Navigate = useNavigate()

  useEffect(() => {
    userAuthenticeted()
  }, []);

  const userAuthenticeted = () => {
    axios.get("http://localhost:4000/admin/isAdminAuth", {
      headers: {
        "x-access-token": localStorage.getItem("adminToken"),
      },
    }).then((respo) => {
      if (respo.data.auth) Navigate('/admin/home')
      else Navigate("/admin/login");
    });
  };

 

  return (
    <div>
      <Header ></Header>
      <div className='w-full min-h-[90vh] flex grid-cols-12 lg:grid'>
            <Navbar ></Navbar>
            <div className='w-full col-span-10 p-4 '>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Admin




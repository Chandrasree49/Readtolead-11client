import React from 'react'
import Nav from '../component/Nav.jsx'
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer.jsx';

const MainLayout = () => {
  return (
    <div>
   <Nav></Nav>
   <div className='min-h-[calc(100vh-306px)]'>
   <Outlet></Outlet>
   </div>
   <Footer></Footer>
    
    </div>
  )
}

export default MainLayout;
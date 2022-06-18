import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../app_logos/logo.png';
import '../App.css';
import About from './wheelchair/About';

function Header () {

return (
   <>
   <Navbar aria-label='primary' className="justify-content-left" bg="dark" variant="dark">
      <Navbar.Brand href="#">
        <img
          src={logo}
          alt="logo with people who have different disabilities"
          width="200"
          height="200"
          className="d-inline-block align-center"/>
        <span>Beyond Travelling</span><span>
        <a href='src/components/wheelchair/About.js' target="_blank" rel="noopener noreferrer" >About this app</a></span>
       </Navbar.Brand>
  </Navbar>
   
   </>
    
  );
}
  export default Header;
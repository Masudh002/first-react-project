import React, { useState } from 'react';
import { HiMenu, HiX} from "react-icons/hi";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false);
  return (
    <nav className='app__navbar'> 
        <div className='app__navbar-logo'>
          <h1 style={{color:"white"}}>Slack</h1>
        </div>
        <ul className="app__navbar-links">
         <li className="p__opensans"><a href="#Demos">Demos</a></li>
         <li className="p__opensans"><a href="#About">About</a></li>
         <li className="p__opensans"><a href="#Blog">Blog</a></li>
         <li className="p__opensans"><a href="#Pages">Pages</a></li>
         <li className="p__opensans"><a href="#Contact">Contact</a></li>
      </ul>
      <div className='app__navbar-logins'>
        <a href="#Login" className='p__opensans'>Login</a>
        <button type='button'>Get Started Free</button>
      </div>
      <div className="app__navbar-smallscreen" >
        <HiMenu  color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
        {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <HiX color='#fff' fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#Demos"onClick={()=>setToggleMenu(false)}>Demos</a></li>
              <li className="p__opensans"><a href="#About"onClick={()=>setToggleMenu(false)}>About</a></li>
              <li className="p__opensans"><a href="#Blog"onClick={()=>setToggleMenu(false)}>Blog</a></li>
              <li className="p__opensans"><a href="#Pages"onClick={()=>setToggleMenu(false)}>Pages</a></li>
              <li className="p__opensans"><a href="#Contact"onClick={()=>setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

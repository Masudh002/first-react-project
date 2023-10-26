import React from 'react';
import {FaRegCirclePlay} from "react-icons/fa6";
import './Header.css';

const 
  Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-p'>
        <h1>Easy way to achieve customer satisfaction</h1>
        <p>Providing all customer service within one software.Our landing page template works on all devices and we have completely redesigned the project management experience.</p>
      </div>
      <div className='app__header-buttons flex__center'>
        <button type='button'>Let's get started</button>
        <FaRegCirclePlay color='#fff' fontSize={27}/>
        <span><a href="/">Watch our video</a></span>         
      </div>
    </div>
  )
}

export default Header

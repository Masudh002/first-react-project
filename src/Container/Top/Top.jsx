import React from 'react';
import { FaSearch,FaAngleDown,FaDotCircle,FaUserCircle } from 'react-icons/fa';
import {MdOutlineCircleNotifications} from "react-icons/md";

import './Top.css'; // Make sure to import your CSS file

const Top = () => {
  return (
    <div className='top__container'>
      <div className='top__container-searchInput'>
        <input type="text" placeholder='Enter keywords...' />
        <FaSearch className='search-icon' />
      </div>
      <div className='top__container-icons'>
        <div className='content' >
         <p>EN</p>
         <FaAngleDown className='icon' style={{cursor:'pointer'}}/>
        </div>
        <FaDotCircle className='icon'/>
        <MdOutlineCircleNotifications className='icon' />
        <FaUserCircle className='icon' />
      </div>
    </div>
  );
};

export default Top;

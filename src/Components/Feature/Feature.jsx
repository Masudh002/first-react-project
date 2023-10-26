import React from 'react';
import './Feature.css';

const Feature = ({icon, title, text}) => {
  return (
    <div className='feature__container'>
      <div className='icon'>
        {icon}
      </div>
      <h1>{title}</h1>
      <p style={{color:'gray'}}>{text}</p>
    </div>
  )
}

export default Feature

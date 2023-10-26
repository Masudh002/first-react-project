import React from 'react';
import './Info.css';

const Info = ({icon,number,subtitle, percent}) => {
  return (
    <div className='info__container'>
      <div className='info__container-icon'>
        {icon}
      </div>
      <div className='info__container-content' style={{padding:10}}>
        <h1>{number}</h1>
        <p style={{fontSize:14 , paddingBottom:"10px"}}>{subtitle}</p>
        <p style={{fontSize:14, paddingBottom:"0px"}}>{percent  } Last month</p>
      </div>
      
    </div>
  )
}

export default Info

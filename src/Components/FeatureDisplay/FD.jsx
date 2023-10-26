import React from 'react';
import './FD.css';
import Feature from '../Feature/Feature';
import {HiSquares2X2,HiChartPie} from "react-icons/hi2";
import { MdCallToAction } from "react-icons/md";
const FD = () => {
  return (
    <div className='container'>
      <div className='features-container'>
      <Feature icon={<HiSquares2X2  color='blue'/>} title={'Multiple Modern Layouts'} text={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.'}/>
      <Feature icon={<MdCallToAction color='orange'/>} title={'Build with CSS'} text={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.'}/>
      <Feature icon={<HiChartPie color='green' />} title={'Fully Responsive'} text={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.'}/>
    </div>
    </div>
    
  )
}

export default FD

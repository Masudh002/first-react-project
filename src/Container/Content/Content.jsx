import React from 'react'
import './Content.css';
import Sidebar from '../Sidebar/Sidebar';
import Info from '../../Components/Info/Info';
import {HiOutlineMail} from "react-icons/hi";
import { BsFileEarmark,BsFillBarChartFill } from "react-icons/bs";
import Thumbnail from '../ThumbnailPage/Thumbnail';
import Top from '../Top/Top';


const Content = () => {
  return (
    <div className='content__container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main__content'>
          <div className='main__content-top'>
           <Top/>
          </div>   
          <div className='main__content-text'>
           <p>Welcome Masudh</p>
          </div>    
          <div className='main__content-info'>
            <Info icon={<BsFillBarChartFill className='icon' style={{ color:"blue"}}/>} number={'1478 286'} subtitle={'Total visits'} percent={'4.07%'}/>
            <Info icon={<BsFileEarmark className='icon' style={{ color:"#f0b341"}}/>} number={'478 520'} subtitle={'Total articles'} percent={'0.24%'}/>
            <Info icon={<HiOutlineMail className='icon' style={{ color:"purple"}}/>} number={'154 872'} subtitle={'Total subscriptions'} percent={'1.64%'}/>
          </div>
          <div className='thumbnail__container'>
            <Thumbnail />
          </div>           
        </div>
    </div>
  )
}

export default Content

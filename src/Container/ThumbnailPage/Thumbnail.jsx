import React from 'react';
import './Thumbnail.css';
import pht from '../ThumbnailPage/assets/pht.jpeg'
import pc from '../ThumbnailPage/assets/pc.jpeg'
const Thumbnail = () => {
  return (
    <div className='table__container'>
      <table className='table'>
        <thead>
          <tr className='trow'>
            <th style={{textAlign:"start"}}><input type="checkbox" /></th>
            <th style={{textAlign:"start"}}>Thumbnail</th>
            <th style={{textAlign:"start"}}>Title</th>
            <th style={{textAlign:"start"}}> Author</th>
            <th style={{textAlign:"start"}}>Status</th>
            <th style={{textAlign:"start"}}>Date</th>
            <th style={{textAlign:"start"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          <td><input type="checkbox"/></td>
          <td><img src={pc} alt="p" className='image'/></td>
          <td style={{fontWeight:"600"}} className='tdata'>Any mechanical keyboard enthusiasts in design?</td>
          <td style={{color:'gray'}} className='tdata'><span><img src="#" alt="" /></span> Eleanor Pena</td>
          <td className='pending'>Pending</td>
          <td style={{color:'gray'}} className='tdata'>18.05.2020</td>
          <td style={{color:'gray'}}>...</td>
        </tbody>
        <tbody>
          <td><input type="checkbox" /></td>
          <td> <img src={pht} alt="ohoto" className='image'/></td>
          <td style={{fontWeight:"600"}} className='tdata'>17 Iconic Movies That Got Surprisingly Low Ratings</td>
          <td style={{color:'gray'}}  className='tdata' ><span><img src="#" alt=""/></span> Courtney Henry</td>
          <td className='pending' >Pending</td>
          <td style={{color:'gray'}} className='tdata'>27.11.2019</td>
          <td style={{color:'gray'}}>...</td>
        </tbody>
      </table>
    </div>
  )
}

export default Thumbnail

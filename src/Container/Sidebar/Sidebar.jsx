import React, { useState } from "react";
import './Sidebar.css';
import {MdMenuOpen,MdHomeFilled, MdEmail, MdComment,MdImage,MdArticle,MdCreate,MdIndeterminateCheckBox,MdOutlineFormatIndentIncrease} from "react-icons/md";

const sidebaraData=[
   {
     title:'Dashboard',
     icon:<MdHomeFilled />,
     path:'/'
   },
   {
     title:'Posts',
     icon:<MdArticle/>,
     path:'/'
   },
   {
    title:'Categories',
    icon:<MdIndeterminateCheckBox />,
    path:'/'
   },
   {
    title:'Media',
    icon:<MdImage />,
    path:'/'
   },
   {
    title:'Pages',
    icon:<MdComment />,
    path:'/'
   },
   {
    title:'Comment',
    icon:<MdEmail/>,
    path:'/'
   },
  
];
const item=[
  {title:'Appearance',
  icon:<MdCreate />,
  path:'/'
},
]

const Sidebar = () => {
  const[sidebarOpen, setSidebarOpen]=useState(true);
  const IconClick = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className='sidebar' style={{width:sidebarOpen? "220px" :"50px"}}>
        <div className='sidebar__header'>
          <div className='sidebar__header-title' style={{display:sidebarOpen? 'block' :"none"}} >
               <div>
                 <h1>Mixland</h1>
                 <h2>Dashboard</h2>
               </div>
          </div>
          <div className='sidebar__header-icon' onClick={IconClick}>
            {sidebarOpen ? (
               <MdMenuOpen fontSize={27} color='gray' fontWeight={700} />
              ) : (
                <MdOutlineFormatIndentIncrease fontSize={25} color='gray' fontWeight={700}/>            
              )}
          </div>
        </div>
        <div className="hr"></div>
        <div className='sidebar__content'>     
           {sidebaraData.map((value, index)=>{
            return( 
              <ul>
                <li key={index} className="sidebar__content-list">
                  <div className="icon">{value.icon}</div>
                  <div className="title" style={{display:sidebarOpen ? "block": "none"}}>{value.title}</div>
                </li>
              </ul>
            )
           })} 
           
            
          <h2 style={{display:sidebarOpen ? "block": "none"}}>SYSTEM</h2>
          {item.map((value, index)=>{
            return(
              <ul>
               <li key={index} className="sidebar__content-list">
                 <div className="icon">{value.icon}</div>
                 <div className="title" style={{display:sidebarOpen ? "block": "none"}}>{value.title}</div>
               </li>
             </ul>
            )
          })}                   
        </div>
    </div>
           
  )
}

export default Sidebar

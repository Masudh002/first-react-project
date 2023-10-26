import React from 'react';
import { Navbar,FD, } from './Components';
import { Header,Content}  from './Container';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Header />
      <Content />
      <FD />     
    </div>
  )
}

export default App

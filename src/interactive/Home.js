import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Visuals from './Visuals';

function Home() {
  return (
    <div style={{display:"block"}}>
        <Sidebar />
       <Visuals />
   </div>
  )
}

export default Home;
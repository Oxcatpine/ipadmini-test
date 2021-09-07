import React from 'react';
import './footer.styles.scss';
import {
    Link
   
  } from "react-router-dom";

const Footer = ()=> (
    <div className ='header'>
       
        <Link className='option' to ='/'>PREV</Link>
        <Link className='option' to ='/storage'>How Much Storage Do I Need?</Link>
        
    </div>

);

export default Footer; 
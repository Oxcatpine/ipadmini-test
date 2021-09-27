import React from 'react';
import {connect} from 'react-redux';
import {
    Link
   
  } from "react-router-dom";

const StoragePage = ({currentTexts}) => (
    <div>
        <h2> {currentTexts.content[1].title}</h2>
        <span>
        {currentTexts.content[1].description}
        </span>
        <div className ='header'>
       
       <Link className='option' to ='/'>{currentTexts.content[0].title}</Link>
       <Link 
       className='option' to ='/storage'> {currentTexts.content[2].title}</Link>
       
       </div>
    </div>
);
const mapStateToProps = (state ) => ({
    currentTexts :state.text.currentTexts,
   })

   export default connect (mapStateToProps) (StoragePage)
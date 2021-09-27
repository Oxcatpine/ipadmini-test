import React from 'react';
import './homepage.styles.scss';

import IpadMini from '../../assets/ipad-mini.jpg';
import {connect} from 'react-redux';
import {
    Link
   
  } from "react-router-dom";
import { setContent } from '../../redux/content.action';


const HomePage = ( {currentTexts}) => (
   <div> 
      <div className = 'homepage' >
    <div className = 'background-image'
       style = {{
        backgroundImage: `url(${IpadMini})`}}/>
     
        
        <div className = 'content-text'>
            
            <div>
            {currentTexts.content[0].description}
            </div>
        </div>

        
    </div>
   

      <div className ='header'>
       
       <Link className='option' to ='/'>PREV</Link>
       <Link 
       className='option' to ='/storage'> {currentTexts.content[1].title}</Link>
       
       </div>
   
   </div>
    
    
);
const mapStateToProps = (state ) => ({
    currentTexts :state.text.currentTexts,
   })
// const mapDispatchToProps = dispatch =>({
//     setContent: ()=> dispatch(setContent() )
//   });


export default connect (mapStateToProps) (HomePage); 
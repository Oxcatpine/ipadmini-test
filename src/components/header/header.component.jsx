import React from 'react';
import './header.styles.scss';
import {connect} from 'react-redux';

const Header = ({currentTexts})=> (
    <div className ='header'>
        <div className =' options'>
            <span>{currentTexts.title}</span>
            <button>hide</button>
        </div>
    </div>

);
const mapStateToProps = (state ) => ({
    currentTexts :state.text.currentTexts,
   })

   export default connect (mapStateToProps) (Header); 
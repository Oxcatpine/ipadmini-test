import React from 'react';
import './homepage.styles.scss';

import IpadMini from '../../assets/ipad-mini.jpg';

const HomePage = () => (
    <div className = 'homepage' >
    <div className = 'background-image'
       style = {{
        backgroundImage: `url(${IpadMini})`}}/>
     
        
        <div className = 'content-text'>
            <h2>
            What Types of iPad Minis Are Available?
            </h2>
            <span>
            The iPad Mini is one of the latest offerings in Apple's stable of tablet computers, and – as the name suggests – differs from its older siblings in that it is much smaller in size.<br /><br />Just because the iPad Mini is physically smaller in size doesn't mean it's smaller in computing power. The tablet, which has features such as a 5MP camera, comes in a 16 GB, 32 GB, and 64 GB form. A Wi-Fi and a Wi-Fi + Cellular model are both available. As an added bonus, the iPad Mini comes in both white and black.
            </span>
        </div>
    </div>
);

export default HomePage; 
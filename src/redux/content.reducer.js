import htmlContent from'../assets/content.json';
import {ContentActionTypes} from './content.types';


const INITIAL_STATE = {
    currentTexts: htmlContent,
}


const contentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      

        
      default:
        return state;
    }
  };

  export default contentReducer;
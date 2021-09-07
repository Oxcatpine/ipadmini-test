import React from 'react';
import {
 
  Switch,
  Route,
  Redirect
 
} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import StoragePage from './pages/storagepage/storage.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
   
    <div >
     <Header />
     
     <Switch>
      <Route exact path ='/' component = {HomePage}/>
      <Route  path ='/storage' component = {StoragePage}/>
      
      </Switch>
     <Footer/>
      
     
    </div>
   
  );
}

export default App;

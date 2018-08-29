import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';


class AboutMe extends Component{

   
    
    render(){
      return(
      
          <div>
              
              <h1>Raymond Farria is <ReactRotatingText items={['cool', 'funny', 'a Software Developer']}/> </h1>
          </div>
      )  
    }
}

export default AboutMe;
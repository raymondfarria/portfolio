import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 

class LandingPage extends Component{
    render(){
      return(
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-6-512.png"
                        alt="avatar"
                        className="avatar-image"
                        />
                    
                    <div className="banner-text">
                        <h1>Software Developer</h1>

                    <hr/>

                    <p>Java | HTML/CSS | JavaScript | React | MySQL | Spring/Spring Boot | NodeJS | OAuth2 </p>

                        <div className="social-links">

                            {/* LinkedIn Icon */}    
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* GitHub Icon */}    
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>

                            {/* Facebook Icon */}    
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            
                        </div>
                    </div>
                </Cell>
            </Grid>      
          </div>
      )  
    }
}

export default LandingPage;
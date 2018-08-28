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

                    <p>Java | HTML/CSS | </p>
                    </div>
                </Cell>
            </Grid>      
          </div>
      )  
    }
}

export default LandingPage;
import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import ReactRotatingText from 'react-rotating-text';


class AboutMe extends Component{

   
    
    render(){
      return(
      
          <div className="hobby-paragraph">
              <h1 style={{textAlign: 'center'}}>Raymond Farria is <ReactRotatingText items={['cool', 'funny', 'humble','a Software Developer']}/> </h1>
            <hr/>

            <p>Ever since I touched my first piece of code, i fell in love. When I'm building an app or website, I tend to immerse myself into the code. I spend hours and hours building something to the point where I lose track of time. Sometimes I need a break or two to unwind and clear my mind. When I do have free time, I like to.................</p>

            <h3 style={{textAlign: 'center'}}>Hobbies</h3>
            <hr style={{borderTop: '5px solid grey', width: '50%', margin: 'auto'}}/>

            <div className="hobby-items">
                <List style={{width: '650px'}}>
                    <ListItem threeLine>
                        <ListItemContent  icon="gamepad" subtitle="When I'm not coding, i like to unwind by playing some of my favorite games including Overwatch, WOW, PubG and Tekken to name a few">Video Games</ListItemContent>
                    </ListItem>
                    <ListItem threeLine>
                        <ListItemContent  icon="pool" subtitle="I am licensed to scuba dive recreationally. Whenever I have the time, I like to take scuba diving excursions">Scuba Diving</ListItemContent>
                    </ListItem>
                    <ListItem threeLine>
                        <ListItemContent  icon="music_video" subtitle="There aren't many things in this world that come close to finding new music. I am a former musician so i listen to a variety of genres.">Music</ListItemContent>
                    </ListItem>
                </List>
            </div>
          </div>
      )  
    }
}

export default AboutMe;
import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import  Avatar  from 'avataaars';


class Contact extends Component{
    render(){
      return(
        <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}>
                <h2>Raymond Farria</h2>
                <Avatar
                    avatarStyle='Circle'
                    topType='LongHairBun'
                    accessoriesType='Blank'
                    hairColor='Black'
                    facialHairType='BeardLight'
                    facialHairColor='Black'
                    clotheType='BlazerSweater'
                    eyeType='Default'
                    eyebrowType='Default'
                    mouthType='Smile'
                    skinColor='Brown'
                />
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> Technology has been a passion of mine since a young age. 
                From problem solving to technical challenges, I have flourished in pressured environments to become a diamond in the rough.
                My past experiences have brought me down a path to Zip Code Wilmington. 
                I am expanding my horizons with every passing day. I love to learn and I will continue to do so as a hungry programmer.</p>
            
            </Cell>
            <Cell col={6}>
                <h2> Contact Me </h2>
                <hr/>

                <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent className="contact-content" style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"></i>
                            (302) 450-8066
                            </ListItemContent>
                        </ListItem>
                        

                        <ListItem>
                            <ListItemContent className="contact-content" style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"></i>
                            rayskeez21
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent className="contact-content" style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:Rayskeez21@gmail.com" data-rel="external">rayskeez21@gmail.com</a>
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent className="contact-content" style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                <a href="https://www.linkedin.com/in/raymond-farria/"
                                rel="noopener noreferrer" target="_blank"
                                data-rel="external">https://www.linkedin.com/in/raymond-farria/</a>
                            </ListItemContent>
                        </ListItem>
                    </List>
                </div>


            </Cell>
        </Grid>
        </div>  
      )  
    }
}

export default Contact;
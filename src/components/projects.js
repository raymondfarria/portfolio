import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
    if(this.state.activeTab === 0){
        return(
          <div className="projects-grid">

            {/* The Cookout */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} >The Cookout </CardTitle>
                <CardText>
                An application utilizing Spotify’s API and OAuth2 sign-in to allow users 
                to make a music playlist and invite guests to contribute to the playlist. 
                Guests can add songs to the playlist and vote on songs to move them up in 
                the queue.  
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/rayskeez21/theCookout-PassionProject">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            
            {/* Portfolio */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} > Portfolio </CardTitle>
                <CardText>
                Created my portfolio website in React. Check it out!!!!    
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
          </div>  
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div><h1>This is Spring!</h1></div>
        )
    } else if(this.state.activeTab === 2){
        return(
            <div><h1>This is Express</h1></div>
        )
    }
}

    render(){
      return(
          <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>React</Tab>
                <Tab>Spring</Tab>
                <Tab>Express</Tab>
              </Tabs>

              
                <Grid className="projects-grid">
                    <Cell col={12}>
                     <div className="content">{this.toggleCategories()}</div>
                    </Cell> 
                </Grid>
              
          </div>
      )  
    }
}

export default Projects;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Work extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.workName}</h4>
                    <h6 style={{marginTop: '0px'}}>{this.props.workTitle}</h6>
                    <p>{this.props.workDescription}</p>
                </Cell>
            </Grid>
        )
    }
}
export default Work;
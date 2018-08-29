import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Work from './workExperience';
import Skill from './skills';


class Resume extends Component{
    render(){
      return(
          <div classname="resume-content">
              <Grid>
                  <Cell col={4}>
                      <div styke={{textAlign: 'center'}}>
                        <img 
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Brown"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                      </div>

                        <h2 style={{paddingTop: '2em'}}>Raymond Farria</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #4fcfdd', width: '50%'}}/>
                        <p>Technology has been a passion of mine since a young age. 
                            From problem solving to technical challenges, I have flourished in pressured environments to become a diamond in the rough. 
                            My past experiences have brought me down a path to Zip Code Wilmington. 
                            I am expanding my horizons with every passing day. 
                            I love to learn and I will continue to do so as a hungry programmer.</p>
                        <hr style={{borderTop: '3px solid #4fcfdd', width: '50%'}}/>

                        <h5>Address</h5>
                        <p>58 Barnsley Ct Dover,DE 19904</p>

                        <h5>Phone</h5>
                        <p>(302) 450-8066</p>

                        <h5>Email</h5>
                        <p>raymondfarria@gmail.com</p>

                        <h5>Web</h5>
                        <p>raymondFarria.herokuapp.com</p>

                        <hr style={{borderTop: '3px solid #4fcfdd', width: '50%'}}/>
                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                    <h2>Work Experience</h2>
                    
                    
                        <Work
                            startYear={2018}
                            endYear="Present"
                            workName="Zip Code Wilmington"
                            workTitle="Student Software Developer"
                            workDescription="Gaining experience in object oriented programming while
                            developing efficient and well-tested code for a variety of
                            different projects utilizing test driven development.
                            Working individually and in teams to build functional programs
                            in Java."
                        />

                        <Work
                            startYear={2017}
                            endYear={2017}
                            workName="Amazon"
                            workTitle="Warehouse Associate"
                            workDescription="Monitored department performance data to identify and avoid
                            potential risks.
                            Banded, wrapped, packaged and cleaned equipment.
                            Operated powered lift trucks, floor sweepers, pallet jacks and
                            forklifts with a 100% safety rating.
                            Worked at a rapid pace to meet tight deadlines."
                        />

                        <Work
                            startYear={2014}
                            endYear={2017}
                            workName="Wal-Mart Distribution Center"
                            workTitle="Warehouse Associate"
                            workDescription="Moved freight, stock and other materials to and from storage
                            and production areas, loading docks, delivery vehicles, ships and
                            containers, by hand or using trucks, tractors, or other
                            equipment.
                            Trained new employees on safety practices in the workplace."
                        />

                        <Work
                            startYear={2012}
                            endYear={2016}
                            workName="United States Navy"
                            workTitle="U.S Corpsman"
                            workDescription="Promoted a non-commissioned officer in the first year of service
                            and provided leadership training.
                            Provided patient care in hospitals, including extracting blood,
                            conducting EKG's, vaccinating patients, and providing
                            emergency support.
                            Patrolled areas and allowed restricted area access for authorized
                            personnel."
                        />
                        <hr style={{borderTop: '3px solid #4fcfdd'}}></hr>

                    <h2>Education</h2>

                        <Education
                            startYear={2016}
                            endYear={2017}
                            schoolName="Delaware Technical Community College"
                            schoolDescription="Completed courses: Computer Engineering 1."
                        />

                        <Education
                            startYear={2009}
                            endYear={2012}
                            schoolName="Delaware State University"
                            schoolDescription="Completed 65 credits towards a B.A in Music."
                        />
                        <hr style={{borderTop: '3px solid #4fcfdd'}}></hr>

                    <h2>Skills</h2>  
                    <Skill 
                        skill="Java"
                        progress={60}
                    />  
                    <Skill 
                        skill="JavaScript"
                        progress={40}
                    />  
                    <Skill 
                        skill="HTML/CSS"
                        progress={38}
                    />  
                    <Skill 
                        skill="Spring"
                        progress={55}
                    />  
                    <Skill 
                        skill="React"
                        progress={30}
                    />  
                  
                  
                  </Cell>
              </Grid>
          </div>
      )  
    }
}

export default Resume;
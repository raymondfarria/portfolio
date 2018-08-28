import React from 'react';
import { Switch, Route} from 'react-router-dom';

import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
)

export default Main;
import React from 'react'
import {Route, Switch} from "react-router-dom"
import Pricing from "./pages/Pricing";
import EmployerProfile from "./pages/EmployerProfile";

import ProfileAbout from './components/ProfileAbout';
import ProfileAddress from './components/ProfileAddress';
import ProfileFriends from './components/ProfileFriends';
import ProfileMessage from './components/ProfileMessage';
import ProfilePostJob from './components/ProfilePostJob';
import ProfileSetting from './components/ProfileSetting';

function Routes() {
    return (
        <Switch>
            <Route exact path="/pricing" render={(props) => <Pricing {...props} /> } />
            <Route exact path="/employerProfile" render={(props) => <EmployerProfile {...props} /> } />
            {/* <Route exact path="/employerProfile#about" render={(props) => <ProfileAbout {...props} /> } />
            <Route exact path="/employerProfile#address" render={(props) => <ProfileAddress {...props} /> } />
            <Route exact path="/employerProfile#post-job" render={(props) => <EmployerProfile {...props} /> } />
            <Route exact path="/employerProfile#friends" render={(props) => <EmployerProfile {...props} /> } />
            <Route exact path="/employerProfile#messages" render={(props) => <EmployerProfile {...props} /> } />
            <Route exact path="/employerProfile#settings" render={(props) => <EmployerProfile {...props} /> } /> */}
        </Switch>
    )
}


export default Routes

import React from 'react'
import {Route, Switch} from "react-router-dom"
import Pricing from "./pages/Pricing";
import EmployerProfile from "./pages/EmployerProfile";
import NewSearchJob from "./pages/NewSearchJob";

function Routes() {
    return (
        <Switch>
            <Route exact path="/pricing" render={(props) => <Pricing {...props} /> } />
            <Route exact path="/employerProfile" render={(props) => <EmployerProfile {...props} /> } />
            <Route exact path="/newSearchJob" render={(props) => <NewSearchJob {...props} /> } />
        </Switch>
    )
}


export default Routes

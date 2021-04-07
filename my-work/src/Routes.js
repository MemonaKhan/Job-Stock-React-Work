import React from 'react'
import {Route, Switch} from "react-router-dom"
import Pricing from "./pages/Pricing";
import EmployerProfile from "./pages/EmployerProfile";

function Routes() {
    return (
        <Switch>
            <Route exact path="/pricing" render={(props) => <Pricing {...props} /> } />
            <Route exact path="/employerProfile" render={(props) => <EmployerProfile {...props} /> } />
        </Switch>
    )
}


export default Routes

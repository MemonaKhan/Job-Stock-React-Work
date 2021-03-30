import React from 'react'
import {Route, Switch} from "react-router-dom"
import Pricing from "./pages/Pricing";

function Routes() {
    return (
        <Switch>
            <Route exact path="/pricing" render={(props) => <Pricing {...props} /> } />
        </Switch>
    )
}

export default Routes

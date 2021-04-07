import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProfileAbout from '../components/ProfileAbout';
import ProfileAddress from '../components/ProfileAddress';
import ProfileFriends from '../components/ProfileFriends';
import ProfileMessage from '../components/ProfileMessage';
import ProfilePostJob from '../components/ProfilePostJob';
import ProfileSetting from '../components/ProfileSetting';

import ClientData from '../data/client/Data'

export default function App() {
    return (
        <>
          
            <Router>
                <section className="full-detail-description full-detail gray-bg">
                    <div className="container">
                        <div className="col-md-12 col-sm-12">
                            <div className="full-card">
                                <div className="deatil-tab-employ tool-tab">

                                    <ul className="nav simple nav-tabs" id="simple-design-tab">
                                        <li className="active"><Link to="/employerProfile">About</Link></li>
                                        <li><Link to="/employerProfile/address">Address</Link></li>
                                        <li><Link to="/employerProfile/post-job">Job Posted</Link></li>
                                        <li><Link to="/employerProfile/friends">Friends</Link></li>
                                        <li><Link to="/employerProfile/messages">Messages <span className="info-bar">{ClientData[0].messages.length}</span></Link></li>
                                        <li><Link to="/employerProfile/settings">Settings</Link></li>
                                    </ul>
                                    <div className="tab-content">
                                        <Switch>
                                            <Route exact path="/employerProfile">
                                                <ProfileAbout name={ClientData[0].name} desc={ClientData[0].description} />
                                            </Route>
                                            <Route path="/employerProfile/address">
                                                <ProfileAddress address={ClientData[0].location.Address} city={ClientData[0].location.city} state={ClientData[0].location.state} country={ClientData[0].location.country} zip={ClientData[0].location.zip} phone={ClientData[0].phone} fax={ClientData[0].fax} email={ClientData[0].email} />
                                            </Route>
                                            <Route path="/employerProfile/post-job">
                                                <ProfilePostJob />
                                            </Route>
                                            <Route path="/employerProfile/friends">
                                                <ProfileFriends />
                                            </Route>
                                            <Route path="/employerProfile/messages">
                                                <ProfileMessage />
                                            </Route>
                                            <Route path="/employerProfile/settings">
                                                <ProfileSetting />
                                            </Route>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Router>
        </>
    )
}
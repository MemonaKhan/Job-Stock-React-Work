import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProfileAbout from '../components/ProfileAbout';
import ProfileAddress from '../components/ProfileAddress';
import ProfileFriends from '../components/ProfileFriends';
import ProfileMessage from '../components/ProfileMessage';
import ProfilePostJob from '../components/ProfilePostJob';
import ProfileSetting from '../components/ProfileSetting';


export default function App() {
    return (
        <>
            {/* <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
          <h3>Home</h3>
          </Route>
          <Route path="/about">
            <h3>About</h3>
          </Route>
          <Route path="/dashboard">
          <h3>Dashboard</h3>
          </Route>
        </Switch>
      </div>
    </Router> */}
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
                                        <li><Link to="/employerProfile/messages">Messages <span className="info-bar">6</span></Link></li>
                                        <li><Link to="/employerProfile/settings">Settings</Link></li>
                                    </ul>
                                    <div className="tab-content">
                                        <Switch>
                                            <Route exact path="/employerProfile">
                                                <ProfileAbout />
                                            </Route>
                                            <Route path="/employerProfile/address">
                                                <ProfileAddress />
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
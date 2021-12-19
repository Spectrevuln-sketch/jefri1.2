import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Pages
import Home from './Home/home'
import Login from './Login/login'
import Register from './Register/register'
import ForgotPassword from './ForgotPassword/forgotpassword'
import SetupCreator from './SetupCreator/setupcreator'
import Publication from './Publication/publication'
import Commission from './Commission/Commisison'
import Creator from './Creator/Creator'
import DonationFeature from './DonationFeature/DonationFeature'
import CommissionFeature from './CommissionFeature/CommissionFeature'
import PublicationFeature from './PublicationFeature/PublicationFeature'
import UserProfile from './UserProfile/UserProfile'
import ManageProfile from './ManageProfile/ManageProfile'
import Marketplace from './Marketplace/Marketplace'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path ="/" exact component={Home}/>
        <Route path ="/login" component={Login}/>
        <Route path ="/register" component={Register}/>
        <Route path ="/forgotpassword" component={ForgotPassword}/>
        <Route path ="/setup" component={SetupCreator}/>
        <Route path ="/publication" component={Publication}/>
        <Route path ="/commission" component={Commission}/>
        <Route path ="/creator" component={Creator}/>
        <Route path ="/donation-feature" component={DonationFeature}/>
        <Route path ="/commission-feature" component={CommissionFeature}/>
        <Route path ="/publication-feature" component={PublicationFeature}/>
        <Route path ="/profile" component={UserProfile}/>
        <Route path ="/manage" component={ManageProfile}/>
        <Route path ="/marketplace" component={Marketplace}/>
      </Fragment>
    </Router>
  )
}

export default App
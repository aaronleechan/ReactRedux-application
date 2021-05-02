import React from 'react';
import {BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom';
import DashBoard from '../DashBoard'
const RouteComponent = (props) =>{
  return(
    <div>
      <Switch>
        <Route exact path="/" render={()=>(<Redirect to="/dashboard" />)} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </div>
  )
}
export default RouteComponent;
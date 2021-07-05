/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-18 09:51:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-07-05 18:35:05
 */
import React from "react";
import SignIn from './components/signin'
import SignUp from './components/signup'
import 'antd/dist/antd.css'; 
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <div className="form-title" style={{marginBottom: 20}}>
          <span><Link to="/sign_in" className="active" >登录</Link></span>
					&nbsp;&nbsp;●&nbsp;&nbsp;<span><Link to="/sign_up">注册</Link></span>
				</div>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sign_in" render={props => <SignIn {...props}/>}>
          </Route>
          <Route path="/sign_up"  render={props => <SignUp {...props}/>}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
     <SignIn />
  </div>
}

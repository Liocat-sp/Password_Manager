import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNavigation from './shared/Navigation/MainNavigation/MainNavigation';
import Login from './containers/Autharizaton/Login/LogIn';
import SidnUp from './containers/Autharizaton/Signup/SignUp';
import Locker from './containers/Locker/Locker';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Switch>
        <Route path="/locker/:lockerId">
          <Locker />
        </Route>
        <Route path="/auth/signup" exact>
          <SidnUp />
        </Route>
        <Route path="/auth/login" exact>
          <Login />
        </Route>
        <Route paht="/" exact>
          <h1>Home</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

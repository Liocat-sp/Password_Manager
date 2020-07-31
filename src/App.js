import React, { useState, Suspense, useEffect, useCallback } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContext } from './shared/context/auth-context';
import Loader from './shared/UIcomponents/Loader/Loader';

const Login = React.lazy(() => import('./containers/Autharizaton/Login/LogIn'));
const MainNavigation = React.lazy(() => import('./shared/Navigation/MainNavigation/MainNavigation'));
const SidnUp = React.lazy(() => import('./containers/Autharizaton/Signup/SignUp'));
const Home = React.lazy(() => import('./containers/Home/home'));
const Locker = React.lazy(() => import('./containers/Locker/Locker'));

let logoutTime;

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userId, setuserId] = useState(null);
  const [token, settoken] = useState(null);
  const [expireAt, setExpireAt] = useState(null);
  const login = useCallback((userId, token, expire) => {
    setuserId(userId);
    settoken(token);
    setisLoggedIn(true);
    const expiraton = expire || new Date(new Date().getTime() + 2 * 3600 * 1000);
    setExpireAt(expiraton);
    localStorage.setItem('Data', JSON.stringify({ userId: userId, token: token, expire: expiraton }));
  }, [])
  const logout = useCallback(() => {
    setuserId(null);
    settoken(null);
    setExpireAt(null);
    setisLoggedIn(false);
    localStorage.setItem('Data', null);
  }, []);
  useEffect(() => {
    if (token && expireAt) {
      const remaning = new Date(expireAt).getTime() - new Date().getTime();
      logoutTime = setTimeout(logout, remaning);
    }
    else {
      clearTimeout(logoutTime);
    }
  }, [expireAt, token, logout]);

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem('Data'));
    if (Data && Data.token && new Date(Data.expire) > new Date()) {
      login(Data.userId, Data.token, Data.expire);
    }
  }, [login]);

  return (
    <Suspense fallback={<Loader />}>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logOut: logout, userId: userId, token: token }}>
        <BrowserRouter  basename="/" >
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
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </Suspense>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import { Router, IndexRoute } from "react-router";
import { HashRouter, Route, IndexRoute } from 'react-router-dom';
import Discover from './components/pages/Discover.jsx';
import Profile from './components/pages/Profile.jsx';
import Search from './components/pages/Search.jsx';
import Subscriptions from './components/pages/Subscriptions.jsx';
import Layout from './components/pages/Layout.jsx';

const root = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path="/discover" component={Discover}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/subscriptions" component={Subscriptions}></Route>
      <Route path="/profile" component={Profile} />
    </div>
  </HashRouter>
  ,
  root
);


/**
 * Created by shi.pengyan on 2015/8/17.
 */
import React from 'react';
import Router from 'react-router';

let { Route, DefaultRoute, RouteHandler, NotFoundRoute } = Router;


var App = require('./app/app');

var Home = require('./app/home');
var NotFound = require('./app/notFound');

var Users = require('./user/userMgr');
var UserDetail = require('./user/components/userDetail');

var Role = require('./role/roleMgr');
var Order = require('./order/orderMgr');
var OrderBook = require('./order/bookMgr'); // nested route
var Setting = require('./setting/settingMgr');


let AppRoutes = (
  <Route name="root" path="/" handler={App}>

    <Route name="home" handler={Home}/>
    <Route name="users" handler={Users}/>
    <Route name="user" path="/user/:userId" handler={UserDetail}/>

    <Route name="role" handler={Role}/>
    <Route name="order" handler={Order}>
      <Route name="book" handler={OrderBook}/>
    </Route>
    <Route name="setting" handler={Setting}/>

    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = AppRoutes;
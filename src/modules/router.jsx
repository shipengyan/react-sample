/**
 * Created by shi.pengyan on 2015/8/17.
 */
import React from 'react';
import Router from 'react-router';

let { Route, DefaultRoute, RouteHandler, NotFoundRoute } = Router;


var App = require('./app/app');
var NotFound = require('./app/notFound');

var User = require('./user/userMgr');
var Role = require('./role/roleMgr');
var Order = require('./order/orderMgr');
var OrderBook = require('./order/bookMgr'); // nested route
var Setting = require('./setting/settingMgr');


let AppRoutes = (
  <Route name="root" path="/" handler={App}>
    <DefaultRoute handler={User}/>
    <Route name="user" handler={User}/>
    <Route name="role" handler={Role}/>
    <Route name="order" handler={Order}>
      <Route name="book" handler={OrderBook}/>
    </Route>
    <Route name="setting" handler={Setting}/>

    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = AppRoutes;
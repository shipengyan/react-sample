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

var TestPage = require('./test/testIndex');
var PureRenderMixinTest = require('./test/components/pureRenderMixin');
var CursorTest = require('./test/components/cursorTest');
var CreateFragmentTest = require('./test/components/createFragment');
import TwoWayBindHelper from './test/components/twoWayBindHelper.jsx';
import ES6 from './test/components/es6';

import WebPackIndex from './test/webpack/index.jsx';
import LazyLoadEntryTest from './test/webpack/lazyLoadEntry';


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

    <Route name="test" handler={TestPage}>
      <Route name="pureRenderMixin" handler={PureRenderMixinTest}/>
      <Route name="cursor" handler={CursorTest}/>
      <Route name="createFragment" handler={CreateFragmentTest}/>
      <Route name="webpack" handler={WebPackIndex}>
        <Route name="lazyLoadEntry" handler={LazyLoadEntryTest}/>
      </Route>

      <Route name="twoWayBind" handler={TwoWayBindHelper}/>
      <Route name="es6" handler={ES6}/>
    </Route>

    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = AppRoutes;
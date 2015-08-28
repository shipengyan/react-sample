/**
 * Created by shi.pengyan on 2015/8/17.
 */
import React from 'react';
import Router from 'react-router';

let { Route, DefaultRoute, RouteHandler, NotFoundRoute } = Router;

import App from './app/app';
import Home from './app/home';
import NotFound from './app/notFound';

import AntdValidation from './components/validation';


let AppRoutes = (
  <Route name="root" path="/" handler={App}>

    <Route path="validation" handler={AntdValidation}/>

    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = AppRoutes;
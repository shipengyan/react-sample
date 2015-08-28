import React from 'react';
import Router from 'react-router';
import PubSub from 'pubsub-js';
import jQuery from 'jquery';
//Global Object
window.React = React;
window.PubSub = PubSub;
window.$ = jQuery;

var AppRoutes = require('./router');
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();


Router.run(AppRoutes, function (Handler) {
  React.render(<Handler/>, document.body);
});


//React.render(<App/>, document.body);

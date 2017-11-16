import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import PubSub from 'pubsub-js';
import jQuery from 'jquery';
//Global Object
window.React = React;
window.PubSub = PubSub;
window.$ = jQuery;

var AppRoutes = require('./router');


Router.run(AppRoutes, function (Handler) {
  ReactDOM.render(<Handler/>, document.body);
});


//React.render(<App/>, document.body);

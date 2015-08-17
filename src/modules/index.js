import React from 'react';
import Router from 'react-router';

var AppRoutes = require('./router');
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();


Router.run(AppRoutes, function (Handler, state) {
  React.render(<Handler params={state}/>, document.body);
});


//React.render(<App/>, document.body);

import React from 'react';
// import Hello from './test/component.jsx';
var injectTapEventPlugin = require('react-tap-event-plugin');

var App = require('./app/app.jsx');

injectTapEventPlugin();


React.render(<App/>, document.body);

var React = require('react');
var Router = require('react-router');

let {RouteHandler } = Router;


var App = React.createClass({

  render: function () {
    console.log('render antd app page.');

    return (
      <RouteHandler/>
    );
  }

});

module.exports = App;
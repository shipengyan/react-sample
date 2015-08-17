/**
 * Created by shi.pengyan on 2015/8/17.
 */
var React = require('react');
var Router = require('react-router');

var { RouteHandler} = Router;

var OrderMgr = React.createClass({
  render: function () {
    return (
      <div>
        <div>This is Order Mgr</div>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = OrderMgr;
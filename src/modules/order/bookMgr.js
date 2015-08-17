/**
 * Created by shi.pengyan on 2015/8/17.
 */
var React = require('react');

let mui = require('material-ui');
let {RefreshIndicator} = mui;

var BookMgr = React.createClass({
  render: function () {
    return (
      <div style={{ position: "relative" }}>
        <div>This is Book Mgr ,test nested router</div>
        <RefreshIndicator size={40} left={80} top={100} status="loading"/>
      </div>
    );
  }
});

module.exports = BookMgr;
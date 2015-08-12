var React = require('react');
require('bootstrap/dist/css/bootstrap.css');

var bootstrap = require('react-bootstrap');
var mui = require('material-ui');

let ThemeManager = new mui.Styles.ThemeManager();
let {Colors, Typography} = mui.Styles;

var {AppBar, Tabs, Tab} = mui;

var UserMgr = require('../user/UserMgr');
var RoleMgr = require('../role/RoleMgr');

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {muiTheme: ThemeManager.getCurrentTheme()};
  },

  componentWillMount: function () {
    ThemeManager.setPalette({accent1Color: Colors.deepOrange500});
  },

  render: function () {
    return (
      <div>
        <AppBar title="React Sample" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Tabs>
          <Tab label="User Mgr">
            <UserMgr/>
          </Tab>
          <Tab label="Role Mgr">
            <RoleMgr/>
          </Tab>
        </Tabs>
      </div>
    );
  }
});

module.exports = App;
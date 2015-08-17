var React = require('react');
var Router = require('react-router');
require('bootstrap/dist/css/bootstrap.css');
var bootstrap = require('react-bootstrap');
var mui = require('material-ui');

let ThemeManager = new mui.Styles.ThemeManager();
let {Colors, Typography} = mui.Styles;
let {AppBar,  MenuItem, LeftNav} = mui;

var { Route, DefaultRoute, RouteHandler, Link } = Router;


var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {muiTheme: ThemeManager.getCurrentTheme()};
  },

  getInitialState: function () {
    return {
      moduleTitle: 'User Management'
    };
  },
  componentWillMount: function () {
    ThemeManager.setPalette({accent1Color: Colors.deepOrange500});
  },

  render: function () {
    var menuItems = [
      {text: 'User Management', route: 'user'},
      {text: 'Role Management', route: 'role'},
      {text: 'Order Management', route: 'order'},
      {text: 'Book Management in Order Mgr', route: 'book'},
      {text: 'Setting Management', route: 'setting'},
      {type: MenuItem.Types.SUBHEADER, text: 'Category'},
      {text: 'GitHub', type: MenuItem.Types.LINK, payload: 'https://github.com/'},
      {text: 'This is Disabled', disabled: true}
    ];

    return (
      <div>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this._handleLeftNavChange}/>
        <AppBar title={this.state.moduleTitle}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this._handleLeftMenu}/>
        <RouteHandler/>
      </div>
    );
  },

  _handleLeftMenu: function () {
    this.refs.leftNav.toggle();
  },

  _handleLeftNavChange: function (e, selectedIndex, menuItem) {
    console.log(selectedIndex, menuItem);
    this.context.router.transitionTo(menuItem.route);
    this.setState({moduleTitle: menuItem.text});
  }
});

module.exports = App;
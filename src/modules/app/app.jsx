var React = require('react');
var Router = require('react-router');
var bootstrap = require('react-bootstrap');
var Mui = require('material-ui');

let ThemeManager = new Mui.Styles.ThemeManager();
let {AppCanvas, AppBar,  MenuItem, LeftNav, Mixins, Styles} = Mui;
let {Spacing, Colors, Typography} = Styles;
let { StyleResizable, StylePropable } = Mixins;

let { Route, DefaultRoute, RouteHandler, Link } = Router;


var App = React.createClass({

  mixins: [StyleResizable, StylePropable],

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
      moduleTitle: 'React Sample'
    };
  },

  componentWillMount: function () {
    ThemeManager.setPalette({accent1Color: Colors.deepOrange500});
  },

  componentDidMount(){
    console.log('app componet did mount');
    this.changeTitleToken = PubSub.subscribe('change.module.title', function (msg, data) {
      this.setState({moduleTitle: data});
    }.bind(this));
  },
  componentWillUnmount(){
    PubSub.unsubscribe(this.changeTitleToken);
  },

  render: function () {
    console.log('render app page.');
    var menuItems = [
        {text: 'Home', route: 'home'},
        {text: 'User Management', route: 'user'},
        {text: 'Role Management', route: 'role'},
        {text: 'Order Management', route: 'order'},
        {text: 'Book Management in Order Mgr', route: 'book'},
        {text: 'Setting Management', route: 'setting'},
        {text: 'Category', type: MenuItem.Types.SUBHEADER},
        {text: 'GitHub', type: MenuItem.Types.LINK, payload: 'https://github.com/'},
        {text: 'This is Disabled', disabled: true}
      ],
      styles = this.getStyles();

    return (
      <AppCanvas>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this._handleLeftNavChange}/>
        <AppBar title={this.state.moduleTitle}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this._handleLeftMenu}/>

        <div style={styles.root}>
          <RouteHandler/>
        </div>
      </AppCanvas>
    );
  },

  _handleLeftMenu: function () {
    this.refs.leftNav.toggle();
  },

  _handleLeftNavChange: function (e, selectedIndex, menuItem) {
    console.log(selectedIndex, menuItem);
    this.context.router.transitionTo(menuItem.route);
    this.setState({moduleTitle: menuItem.text});
  },

  getStyles(){
    let subNavWidth = Spacing.desktopKeylineIncrement * 3 + 'px';
    let styles = {
      root: {
        paddingTop: Spacing.desktopKeylineIncrement + 'px'
      },
      rootWhenMedium: {
        position: 'relative'
      },
      secondaryNav: {
        borderTop: 'solid 1px ' + Colors.grey300,
        overflow: 'hidden'
      },
      content: {
        boxSizing: 'border-box',
        padding: Spacing.desktopGutter + 'px',
        maxWidth: (Spacing.desktopKeylineIncrement * 14) + 'px'
      },
      secondaryNavWhenMedium: {
        borderTop: 'none',
        position: 'absolute',
        top: '64px',
        width: subNavWidth
      },
      contentWhenMedium: {
        marginLeft: subNavWidth,
        borderLeft: 'solid 1px ' + Colors.grey300,
        minHeight: '800px'
      }
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) ||
      this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.root = this.mergeStyles(styles.root, styles.rootWhenMedium);
      styles.secondaryNav = this.mergeStyles(styles.secondaryNav, styles.secondaryNavWhenMedium);
      styles.content = this.mergeStyles(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }
});

module.exports = App;
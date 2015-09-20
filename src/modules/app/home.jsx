/**
 * Created by shi.pengyan on 2015/8/20.
 */
var React = require('react');
var Router = require('react-router');
var Bootstrap = require('react-bootstrap');
var Mui = require('material-ui');

var {Link} =  Router;
var {Avatar, FlatButton, Card, CardActions, CardHeader, CardText} = Mui;


var Home = React.createClass({

  getInitialState(){
    return null;
  },

  componentDidMount(){
    PubSub.publish('change.module.title', 'Home');
  },


  render(){

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Card initiallyExpanded={true}>
              <CardHeader
                title="Application Modules"
                subtitle="just for test"
                avatar={<Avatar style={{color:'red'}}>A</Avatar>}
                showExpandableButton={true}>
              </CardHeader>
              <CardText expandable={true}>

                <ul className="list-group">
                  <li className="list-group-item"><Link to="home">Home</Link></li>
                  <li className="list-group-item"><Link to="users">User Management</Link></li>
                  <li className="list-group-item"><Link to="order">Order Management</Link></li>
                  <li className="list-group-item"><Link to="book">Book Management</Link></li>
                  <li className="list-group-item"><Link to="setting">Setting Management</Link></li>
                </ul>

              </CardText>
            </Card>

          </div>

          <div className="col-md-6">
            <Card initiallyExpanded={true}>
              <CardHeader
                title="React Test"
                subtitle="just for test"
                avatar={<Avatar style={{color:'red'}}>R</Avatar>}
                showExpandableButton={true}>
              </CardHeader>
              <CardText expandable={true}>

                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="user" params={{userId:100}} query={{status:'X'}}>React-Router params and query</Link>
                  </li>
                  <li className="list-group-item"><Link to="/test/pureRenderMixin">PureRenderMixin Test</Link></li>
                  <li className="list-group-item"><Link to="/test/cursor">ImmutableJS Cursor Test</Link></li>
                  <li className="list-group-item">
                    <Link to="/test/createFragment">React.addons.createFragment Test</Link></li>
                  <li className="list-group-item"><Link to="/test/twoWayBind">双向绑定辅助方法</Link></li>
                  <li className="list-group-item"><Link to="/test/es6">ES6</Link></li>
                  <li className="list-group-item"><Link to="/test/webpack/lazyLoadEntry">懒加载模块</Link></li>
                </ul>

              </CardText>
            </Card>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Home;
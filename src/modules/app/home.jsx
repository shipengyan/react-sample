/**
 * Created by shi.pengyan on 2015/8/20.
 */
var React = require('react');
var Router = require('react-router');
var Bootstrap = require('react-bootstrap');
var Mui = require('material-ui');

var {Link} =  Router;
var {Grid,Row,Col} = Bootstrap;
var {LinearProgress} = Mui;


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
        <LinearProgress mode="indeterminate"/>
        <Grid>
          <Row><Link to="home">Home</Link></Row>
          <Row><Link to="user">User Management</Link></Row>
          <Row><Link to="order">Order Management</Link></Row>
          <Row><Link to="book">Book Management</Link></Row>
          <Row><Link to="setting">Setting Management</Link></Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Home;
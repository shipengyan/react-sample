/**
 * Created by shi.pengyan on 2015/8/20.
 */
var React = require('react');
var Router = require('react-router');
var Bootstrap = require('react-bootstrap');
var Mui = require('material-ui');

var {Link} =  Router;
var {Grid, Row, Col} = Bootstrap;
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
        <Grid>
          <Row>
            <Col md={6}>

              <Card initiallyExpanded={true}>
                <CardHeader
                  title="Application Modules"
                  subtitle="just for test"
                  avatar={<Avatar style={{color:'red'}}>A</Avatar>}
                  showExpandableButton={true}>
                </CardHeader>
                <CardText expandable={true}>
                  <Grid>
                    <Row> <Link to="home">Home</Link></Row>
                    <Row><Link to="users">User Management</Link></Row>
                    <Row><Link to="order">Order Management</Link></Row>
                    <Row><Link to="book">Book Management</Link></Row>
                    <Row><Link to="setting">Setting Management</Link></Row>
                  </Grid>
                </CardText>
              </Card>

            </Col>

            <Col md={6}>
              <Card initiallyExpanded={true}>
                <CardHeader
                  title="React Test"
                  subtitle="just for test"
                  avatar={<Avatar style={{color:'red'}}>B</Avatar>}
                  showExpandableButton={true}>
                </CardHeader>
                <CardText expandable={true}>
                  <Grid>
                    <Row><Link to="user" params={{userId:100}} query={{status:'X'}}>React-Router params and query</Link></Row>
                    <Row><Link to="/test/pureRenderMixin">PureRenderMixin Test</Link></Row>
                    <Row><Link to="/test/cursor">ImmutableJS Cursor Test</Link></Row>
                    <Row><Link to="/test/createFragment">React.addons.createFragment Test</Link></Row>
                    <Row><Link to="/test/lazyLoadEntry">懒加载模块</Link></Row>

                  </Grid>
                </CardText>
              </Card>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
});

module.exports = Home;
import React from 'react';
import Reflux from 'reflux';
import Mui from 'material-ui';
//import Bootstrap from 'react-bootstrap'; //error fuck, it's wield

let Bootstrap = require('react-bootstrap');


let {Table, FlatButton, Dialog} = Mui;
let {ButtonGroup, Button} = Bootstrap;


let UserAction = require('./userAction');
let UserStore = require('./userStore');

let UserList = require('./components/userList');
let UserForm = require('./components/userForm');


let UserMgr = React.createClass({

  getInitialState(){
    return {
      currentRow: null
    };
  },
  parentSelectionFunc: function (user) {
    this.refs.userForm.setData(user);
  },

  componentDidMount: function () {
    console.log('user mangement did mount');
    PubSub.publish('change.module.title', 'User Management');
  },

  componentWillUnmount: function () {
  },

  shouldComponentUpdate: function (nextProp, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  },

  render: function () {
    console.log('render User Mgr Page...');

    return (
      <div>
        <UserList parentSelectionFunc={this.parentSelectionFunc}/>
        <UserForm ref="userForm"/>
      </div> );
  }

});

module.exports = UserMgr;

//TODO mixins in es6 is terrible, you should use 'es6-mixins' module

//class UserMgr extends React.Component {
//  mixins = [];
//
//
//  _onChange() {
//  }
//
//
//}
//
//export default UserMgr;
//
//let UserMgr = React.createClass({
//
//
//  getInitialState: function () {
//    return initStateObj;
//  },
//
//  _onRowSelection: function (selectedRows) {
//    console.log('row selection', selectedRows);
//
//    if (!selectedRows.length) {
//      this.setState({currentRow: null});
//      return;
//    }
//    initStateObj.currentRow = this.state.rowData[selectedRows[0]];
//    this.setState(initStateObj);
//    this.refs.userForm.setData(initStateObj.currentRow);
//  },
//
//  _handleUserStatus: function (user) {
//    if (!this.state.currentRow) {
//      return;
//    }
//    console.log('handle user state', user);
//    UserAction.changeUserStatus(user.id.content);
//  },
//
//  _handleResetPwd: function (user) {
//    console.log('handle user reset pwd', user);
//    this.setState({alertMsg: 'Reset user password.'});
//    this.refs.alertDialog.show();
//  },
//  _handleUserExpired: function () {
//    console.log('handle user expired');
//    this.setState({alertMsg: 'Handle user expired.(This is a react-bootstrap button, haha!! )'});
//    this.refs.alertDialog.show();
//  },
//
//  _handleCustomDialogCancel: function () {
//    this.refs.alertDialog.dismiss();
//  },
//
//  _handleCustomDialogSubmit: function () {
//    this.refs.alertDialog.dismiss();
//  },
//
//  componentWillMount: function () {
//
//    UserStore.getUsers().done(function (data) {
//      this.setState($.extend(initStateObj, {rowData: data, currentRow: data[0]}));
//    }.bind(this)).fail(function () {
//      alert('fail to query users.')
//    });
//  },
//
//
//  shouldComponentUpdate: function (nextProp, nextState) {
//    console.log('shouldComponentUpdate');
//    return true;
//  }
//
//
//});
//
//module.exports = UserMgr;
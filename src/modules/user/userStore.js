/**
 * Created by shi.pengyan on 2015-08-06.
 */

import Immutable from 'immutable';
import Reflux  from 'reflux';
import UserAction from './userAction';

let {List, Map} = Immutable;

let UserStore = Reflux.createStore({
  listenables: [UserAction],

  init() {
    this.users = List();
    //this.listenTo(UserAction.loadPage, this.loadPage);
    //this.listenToMany(UserAction);
  },

  getInitialState() {
    return {
      rowData: this.users,
      currentRow: Map()
    };
  },

  onAddUser(user) {
    // change user to user row can be reginized by mui
    var row = {
      id: {content: Math.random() * 10000},
      name: {content: user.userName},
      code: {content: user.userCode},
      status: {content: 'Enable'},
      effectDate: {content: user.effectDate},
      expiredDate: {content: user.expiredDate}
    };
    this.users = this.users.unshift(row);
    this.trigger({rowData: this.users});
  },

  onDelUser(id) {
    this.users = this.users.remove(this.users.findIndex(function (item) {
      return item.getIn(['id', 'content']) === id;
    }));

    this.trigger({rowData: this.users, currentRow: null});
  },

  onUpdateUser(user) {
    this.users = this.users.update(this.users.findIndex(function (item) {
      return item.getIn(['id', 'content']) === user.id;
    }), function (item) {

      return item.mergeDeep({
        name: {content: user.userName},
        code: {content: user.userCode},
        email: {conent: user.email},
        mobile: {content: user.mobile},
        effectDate: {content: user.effectDate},
        expiredDate: {content: user.expiredDate}
      });
    });

    this.trigger({rowData: this.users});
  },

  onChangeUserStatus(id){
    var currentRow;
    this.users = this.users.update(this.users.findIndex(function (item) {
      return item.getIn(['id', 'content']) === id;
    }), function (item) {
      return currentRow = item.updateIn(['status', 'content'], function () {
        return item.getIn(['status', 'content']) === 'Enable' ? 'Disable' : 'Enable';
      });
    });
    this.trigger({rowData: this.users, currentRow: currentRow});
  },

  onQueryUsers() {
    var self = this;
    console.log('userStore query users.');
    if (this.users.length) {
      this.trigger(this.users);
    } else {
      $.getJSON('static/test/user.json').done((data)=> {
        self.users = Immutable.fromJS(data); //convert to List and Map
        self.trigger({rowData: self.users});
      });
    }
  }

});

module.exports = UserStore;


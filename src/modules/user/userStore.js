/**
 * Created by shi.pengyan on 2015-08-06.
 */

import Reflux  from 'reflux';
import UserAction from './userAction';


let UserStore = Reflux.createStore({
  listenables: [UserAction],

  init() {
    this.users = [];
    //this.listenTo(UserAction.loadPage, this.loadPage);
    //this.listenToMany(UserAction);
  },

  getInitialState() {
    return {
      rowData: this.users
    };
  },

  onAddUser(user) {
    "use strict";
    // change user to user row can be reginized by mui
    var row = {
      id: {content: Math.random() * 10000},
      name: {content: user.userName},
      code: {content: user.userCode},
      status: {content: 'Enable'},
      effectDate: {content: user.effectDate},
      expiredDate: {content: user.expiredDate}
    };
    this.users.unshift(row);
    this.trigger({rowData: this.users});
  },

  onDelUser() {
  },

  onUpdateUser(user) {
    $.each(this.users, function (index, item) {
      if (item.id.content == user.id) {
        item.name.content = user.userName;
        item.code.content = user.userCode;
        item.email.content = user.email;
        item.mobile.content = user.mobile;
        item.effectDate.content = user.effectDate;
        item.expiredDate = user.expiredDate;

        return false;
      }
    });

    this.trigger({rowData: this.users});
  },

  onChangeUserStatus(id){
    $.each(this.users, function (index, user) {
      if (user.id.content == id) {
        user.status.content = user.status.content === 'Enable' ? 'Disable' : 'Enable';
        return false;
      }
    });
    this.trigger({rowData: this.users});
  },

  onQueryUsers() {
    if (this.users.length) {
      this.trigger(this.users);
    } else {
      $.getJSON('static/test/user.json').done((data)=> {
        this.users = data;
        this.trigger({rowData: this.users});
      });
    }
  }

});

module.exports = UserStore;


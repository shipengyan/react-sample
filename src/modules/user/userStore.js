/**
 * Created by shi.pengyan on 2015-08-06.
 */
var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConst = require('./userConst');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

//蛋疼的数据结构
var UserData = [];

var userStore = assign({}, EventEmitter.prototype, {

  getUsers: function () {
    return $.getJSON('static/test/user.json').done(function (data) {
      UserData = data;
    });
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/* User Logic begin*/
function changeStatus(id) {
  var record = null;
  $.each(UserData, function (index, user) {
    if (user.id.content === ('' + id)) {
      record = user;
      return false;
    }
  });
  var status = record.status.content;
  record.status.content = status === 'Enable' ? 'Disable' : 'Enable';
}

/* User Logic end*/

AppDispatcher.register(function (action) {

  switch (action.actionType) {
    case UserConst.CHANGE_STATUS:
      changeStatus(action.id);
      break;
    case UserConst.RESET_PWD:
      resetPwd(action.id);
      break;
  }
  action.callback && action.callback();

  userStore.emitChange();
});


module.exports = userStore;
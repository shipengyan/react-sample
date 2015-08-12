/**
 * Created by shi.pengyan on 2015-08-06.
 */
var AppDispatcher = require('../dispatcher');
var UserConst = require('./userConst');

var userAction = {
  create: function (userObj) {

  },
  update: function () {

  },

  changeStatus: function (id, callback) {
    AppDispatcher.dispatch({
      actionType: UserConst.CHANGE_STATUS,
      id: id,
      callback: callback
    });
  },

  resetPwd: function (id) {
    AppDispatcher.dispatch({
      actionType: UserConst.RESET_PWD,
      id: id
    });
  }

};

module.exports = userAction;
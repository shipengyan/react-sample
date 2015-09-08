/**
 * Created by shi.pengyan on 2015-08-06.
 */
import Reflux from 'reflux';

import {getUsers, getLoadAjaxError} from './userApi';

let UserAction = Reflux.createActions([
  'addUser',
  'delUser',
  'updateUser',
  //{'queryUsers': {sync: true}},
  {
    'queryUsers': {
      asyncResult: true,
      preEmit: function (params) {
        console.log('preEmit:' + params);
      },
      shouldEmit: function (params) {
        console.log('shouldEmit:' + params);
        return true;
      }
    }
  },
  'changeUserStatus',
  {'loadAjaxError': {asyncResult: true}}
]);

//export default UserAction;

// Reflux.createAction , Reflux.createActions
//let UserAction = Reflux.createActions({
//  'addUser': {asyncResult: true},
//  'delUser': {asyncResult: true},
//  'updateUser': {asyncResult: true},
//  'queryUsers': {asyncResult: true},
//  'changeUserStatus': {asyncResult: false}
//});


// they are the same
//UserAction.loadAjaxError.listen(function () {
//  $.getJSON('test/cc.json').then(this.completed, this.failed);
//});


UserAction.queryUsers.listenAndPromise(getUsers);
UserAction.loadAjaxError.listenAndPromise(getLoadAjaxError);


module.exports = UserAction;
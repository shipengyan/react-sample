/**
 * Created by shi.pengyan on 2015-08-06.
 */
import Reflux from 'reflux';

let UserAction = Reflux.createActions([
  'addUser',
  'delUser',
  'updateUser',
  'queryUsers',
  'changeUserStatus'
]);

//export default UserAction;

//let UserAction = Reflux.createActions({
//  'addUser': {asyncResult: true},
//  'delUser': {asyncResult: true},
//  'updateUser': {asyncResult: true},
//  'queryUsers': {asyncResult: true},
//  'changeUserStatus': {asyncResult: false}
//});
module.exports = UserAction;
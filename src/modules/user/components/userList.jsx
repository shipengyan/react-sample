/**
 * Created by shi.pengyan on 2015/8/18.
 */
import React from 'react';
import Reflux from 'reflux';
import Mui from 'material-ui';

let Bootstrap = require('react-bootstrap');

let { Dialog, FlatButton,Table } = Mui;
let {ButtonGroup, Button} = Bootstrap;

let UserAction = require('../userAction');
let UserStore = require('../userStore');


let UserList = React.createClass({

  propTypes: {
    parentSelectionFunc: React.PropTypes.func
  },

  mixins: [Reflux.connect(UserStore)], // state放到store中了

  _onRowSelection: function (selectedRows) {
    console.log('row selection', selectedRows);

    if (!selectedRows.length) {
      this.setState({currentRow: null});
      return;
    }
    var currentRow = this.state.rowData[selectedRows[0]];
    this.setState({currentRow});
  },

  componentDidMount() {
    UserAction.queryUsers();
  },

  //componentDidUpdate(prevProp, prevState){
  //  this.props.parentSelectionFunc(this.state.currentRow);
  //},

  render: function () {
    // Column configuration
    let headerCols = {
      name: {content: 'Name', tooltip: 'The name'},
      code: {content: 'Code', tooltip: 'The Code'},
      status: {content: 'Status', tooltip: 'The status'},
      effectDate: {content: 'Effect Date', tooltip: 'The Effect Date'},
      expiredDate: {content: 'Expired Date', tooltip: 'The Expired Date'}
    };
    let colOrder = ['name', 'code', 'status', 'effectDate', 'expiredDate'];

    var statusLevel;
    if (this.state.currentRow) {
      statusLevel = this.state.currentRow.status.content === 'Enable' ? 'Disable' : 'Enable';
    } else {
      statusLevel = 'Disable';
    }
    var labelStyle = {'textTransform': 'none'};

    return (
      <div>
        <Table headerColumns={headerCols}
               columnOrder={colOrder}
               rowData={this.state.rowData}
               height="300px"
               fixedHeader={true}
               stripedRows={true}
               showRowHover={false}
               selectable={true}
               multiSelectable={false}
               canSelectAll={false}
               deselectOnClickaway={false}
               onRowSelection={this._onRowSelection}>
        </Table>

        <div>
          <FlatButton
            label={statusLevel} labelStyle={labelStyle}
            onClick={this._handleUserStatus.bind(this, this.state.currentRow)}/>
          <FlatButton label="Reset Password" labelStyle={labelStyle}
                      onClick={this._handleResetPwd.bind(this, this.state.currentRow)}/>
          <ButtonGroup>
            <Button onClick={this._handleUserExpired}>Expired</Button>
          </ButtonGroup>

          {/* wo cao */}
          <Dialog ref="alertDialog"
                  title="Info"
                  actions={[
                    <FlatButton
                      label="Cancel"
                      secondary={true}
                      onTouchTap={this._handleCustomDialogCancel}/>,
                    <FlatButton
                      label="Submit"
                      primary={true}
                      onTouchTap={this._handleCustomDialogSubmit}/>
                    ]}
                  modal={true}>
            {this.state.alertMsg}
          </Dialog>
        </div>
      </div>
    );
  },

  _handleUserStatus: function (user) {
    if (!this.state.currentRow) {
      return;
    }
    console.log('handle user state', user);
    UserAction.changeUserStatus(user.id.content);
  },

  _handleResetPwd: function (user) {
    console.log('handle user reset pwd', user);
    this.setState({alertMsg: 'Reset user password.'});
    this.refs.alertDialog.show();
  },

  _handleUserExpired: function () {
    console.log('handle user expired');
    this.setState({alertMsg: 'Handle user expired.(This is a react-bootstrap button, haha!! )'});
    this.refs.alertDialog.show();
  },

  _handleCustomDialogCancel: function () {
    this.refs.alertDialog.dismiss();
  },

  _handleCustomDialogSubmit: function () {
    this.refs.alertDialog.dismiss();
  }
});

module.exports = UserList;
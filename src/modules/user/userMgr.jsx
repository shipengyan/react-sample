var React = require('react');

var UserAction = require('./userAction');
var UserStore = require('./userStore');

var UserForm = require('./components/userForm');


let mui = require('material-ui');
let {Table, FlatButton,Dialog} = mui;
let {ButtonGroup, Button} = require('react-bootstrap');

var initStateObj = {
  labelStyle: {'textTransform': 'none'},

  //for table
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: true,
  showRowHover: false,
  selectable: true,
  multiSelectable: false,
  canSelectAll: false,
  deselectOnClickaway: false,
  height: '300px',
  rowData: []
};

var UserMgr = React.createClass({
  getInitialState: function () {
    return initStateObj;
  },

  _onRowSelection: function (selectedRows) {
    console.log('row selection', selectedRows);

    if (!selectedRows.length) {
      this.setState({currentRow: null});
      return;
    }
    initStateObj.currentRow = this.state.rowData[selectedRows[0]];
    this.setState(initStateObj);
    this.refs.userForm.setData(initStateObj.currentRow);
  },

  _handleUserStatus: function (user) {
    if (!this.state.currentRow) {
      return;
    }
    console.log('handle user state', user);
    UserAction.changeStatus(user.id.content);
  },

  _handleResetPwd: function (user) {
    console.log('handle user reset pwd', user);
    this.setState({alertMsg: 'Reset user password.'});
    this.refs.alertDialog.show();
  },
  _handleUserExpired: function () {
    console.log('handle user expired');
    this.setState({alertMsg: 'Handle user expired'});
    this.refs.alertDialog.show();
  },

  _handleCustomDialogCancel: function () {
    this.refs.alertDialog.dismiss();
  },

  _handleCustomDialogSubmit: function () {
    this.refs.alertDialog.dismiss();
  },

  componentWillMount: function () {
    UserStore.getUsers().done(function (data) {
      this.setState($.extend(initStateObj, {rowData: data, currentRow: data[0]}));
    }.bind(this)).fail(function () {
      alert('fail to query users.')
    });
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function () {
  },

  shouldComponentUpdate: function (nextProp, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  },

  _onChange: function () {
    this.setState(initStateObj);
  },


  render: function () {
    console.log('render...');
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

    return (
      <div>
        <Table headerColumns={headerCols}
               columnOrder={colOrder}
               rowData={this.state.rowData}
               height={this.state.height}
               fixedHeader={this.state.fixedHeader}
               stripedRows={this.state.stripedRows}
               showRowHover={this.state.showRowHover}
               selectable={this.state.selectable}
               multiSelectable={this.state.multiSelectable}
               canSelectAll={this.state.canSelectAll}
               deselectOnClickaway={this.state.deselectOnClickaway}
               onRowSelection={this._onRowSelection}>
        </Table>

        {/* buttons begin*/}
        <div>
          <FlatButton
            label={statusLevel} labelStyle={this.state.labelStyle}
            onClick={this._handleUserStatus.bind(this, this.state.currentRow)}/>
          <FlatButton label="Reset Password" labelStyle={this.state.labelStyle}
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
                  modal={this.state.modal}>
            {this.state.alertMsg}
          </Dialog>
        </div>
        {/* buttons end*/}

        <UserForm ref="userForm"/>
        {/*<UserForm user={this.state.currentRow}/>*/}
      </div>
    );
  },
  _initUI: function () {

  }
});

module.exports = UserMgr;
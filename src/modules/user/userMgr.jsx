var React = require('react');

var UserAction = require('./userAction');
var UserStore = require('./userStore');

var UserForm = require('./components/userForm');


let mui = require('material-ui');
let {Table, FlatButton} = mui;
let {ButtonGroup, Button} = require('react-bootstrap');


function getState() {
  return {
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
}


var UserMgr = React.createClass({
  getInitialState: function () {
    return getState();
  },

  _onRowSelection: function (selectedRows) {
    console.log('row selection', selectedRows);

    if (!selectedRows.length) {
      this.setState({currentRow: null});
      return;
    }
    this.setState({currentRow: this.state.rowData[selectedRows[0]]});
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
  },

  componentWillMount: function () {
    UserStore.getUsers().done(function (data) {
      this.setState({rowData: data, currentRow: data[0]});
    }.bind(this))
      .fail(function () {
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
    this.setState(getState());
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

        <div>
          <FlatButton
            label={statusLevel} labelStyle={this.state.labelStyle}
            onClick={this._handleUserStatus.bind(this, this.state.currentRow)}/>
          <FlatButton label="Reset Password" labelStyle={this.state.labelStyle}
                      onClick={this._handleResetPwd.bind(this, this.state.currentRow)}/>
          <ButtonGroup>
            <Button>Expired</Button>
          </ButtonGroup>
        </div>

        <UserForm/>
      </div>
    );
  }
});

module.exports = UserMgr;
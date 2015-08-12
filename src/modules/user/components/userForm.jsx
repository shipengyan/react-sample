/**
 * Created by shi.pengyan on 2015-08-06.
 */
var React = require('react');

let mui = require('material-ui');
let {TextField, DatePicker, RaisedButton } = mui;


var UserForm = React.createClass({
  getInitialState: function () {
    return {
      labelStyle: {textTransform: 'none'}
    };
  },

  _handleOk: function () {
  },
  _handleCancel: function () {
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <TextField hintText="User Name" floatingLabelText="User Name"/>
          </div>
          <div className="col-md-3">
            <TextField hintText="User Code" floatingLabelText="User Code"/>
          </div>
          <div className="col-md-3">
            <TextField hintText="E-Mail" floatingLabelText="E-Mail"/>
          </div>
          <div className="col-md-3">
            <TextField hintText="Mobile" floatingLabelText="Mobile"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <DatePicker hintText="Effect Date" mode="landscape"/>
          </div>
          <div className="col-md-3">
            <DatePicker hintText="Expired Date" mode="landscape"/>
          </div>
        </div>

        <div className="row pull-right">
          <RaisedButton label="OK" labelStyle={this.state.labelStyle} onClick={this._handleOk}/>
          <RaisedButton label="Cancel" labelStyle={this.state.labelStyle} onClick={this._handleCancel}/>
        </div>

      </div>);
  }
});

module.exports = UserForm;
/**
 * Created by shi.pengyan on 2015-08-06.
 */
var React = require('react');

var UserAction = require('../userAction');
var UserStore = require('../userStore');

let mui = require('material-ui');
let {TextField, DatePicker, RaisedButton } = mui;

var UserForm = React.createClass({
  getInitialState: function () {
    this.currentDate = new Date();
    return {
      disabled: true,
      defaultDate: this.currentDate,
      labelStyle: {textTransform: 'none'} // remove capital word.
    };
  },

  _handleNewUser: function () {
    this.resetForm();
    this.setState({mode: 'NEW', disabled: false});
  },

  _handleEditUser: function () {
    this.setState({mode: 'EDIT', disabled: false});
  },

  _handleOk: function () {
    var userName = this.refs.userName.getValue(); // mui textfield value
    var userCode = this.refs.userCode.getValue();
    var email = this.refs.email.getValue();
    var mobile = this.refs.mobile.getValue();
    var effectDate = this.refs.effectDate.getDate();
    var expiredDate = this.refs.expiredDate.getDate();

    var user = {
      userName: userName,
      userCode: userCode,
      email: email,
      mobile: mobile,
      effectDate: Date.format(effectDate, 'yyyy-mm-dd'),
      expiredDate: Date.format(expiredDate, 'yyyy-mm-dd')
    };

    //TODO validator

    switch (this.state.mode) {
      case 'NEW':
        UserAction.add(user);
        break;
      case 'EDIT':
        //user.id = this.prop.user.id.content;
        user.id = this.user.id.content;
        UserAction.update(user);
        break;
    }

    this.setState({mode: null, disabled: true});
  },

  _handleCancel: function () {

    this.setState({mode: null, disabled: true});
  },

  //_handleEffectDateChange: function (nill, date) {
  //  if (this.props.user) {
  //    //this.setProps({effectDate: date}); // key is too long
  //    this.props.user.effectDate.content = Date.format(date, 'yyyy-MM-dd');
  //    this.forceUpdate();
  //  }
  //},
  //_handleExpiredDateChange: function (nill, date) {
  //  if (this.props.user) {
  //    //this.setProps({expiredDate: date});
  //    this.props.user.expiredDate.content = Date.format(date, 'yyyy-MM-dd');
  //    this.forceUpdate();
  //  }
  //},

  _handleTextFieldChange: function (e) {
    console.log(e);
  },

  _formatDate: function (date) {
    return date.toFormattedString('yyyy-MM-dd');
  },

  resetForm: function () {
    this.refs.userName.clearValue();
    this.refs.userCode.clearValue();
    this.refs.email.clearValue();
    this.refs.mobile.clearValue();

    this.refs.effectDate.setDate(this.currentDate);//TODO bug cannot clear
    this.refs.expiredDate.setDate(this.currentDate);
  },

  // look good seemingly, but use it in parent is not good
  setData: function (user) {
    this.user = user;
    this.refs.userName.setValue(user.name.content);
    this.refs.userCode.setValue(user.code.content);
    this.refs.email.setValue(user.email.content);
    this.refs.mobile.setValue(user.mobile.content);

    this.refs.effectDate.setDate(Date.parseFormatted(user.effectDate.content, 'yyyy-MM-dd'));
    this.refs.expiredDate.setDate(Date.parseFormatted(user.expiredDate.content, 'yyyy-MM-dd'));
  },

  render: function () {
    //TODO 表单类型的不要使用props传递值，否则需要处理每个change事件
    //var name, code, email, mobile, effectDate, expiredDate;
    //if (this.props.user) {
    //  name = this.props.user.name.content;
    //  code = this.props.user.code.content;
    //  email = this.props.user.email.content;
    //  mobile = this.props.user.mobile.content;
    //  effectDate = Date.parseFormatted(this.props.user.effectDate.content, 'yyyy-MM-dd');
    //  expiredDate = Date.parseFormatted(this.props.user.expiredDate.content, 'yyyy-MM-dd');
    //} else {
    //  effectDate = expiredDate = this.currentDate;
    //}

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <TextField hintText="User Name" disabled={this.state.disabled} ref="userName"
                       floatingLabelText="User Name"/>
          </div>
          <div className="col-md-3">
            <TextField hintText="User Code" disabled={this.state.disabled} ref="userCode"
                       floatingLabelText="User Code"/>
          </div>
          <div className="col-md-3">
            <TextField hintText="E-Mail" disabled={this.state.disabled} ref="email"
                       floatingLabelText="E-Mail"/>
          </div>
          <div className="col-md-3">
            <TextField hintText="Mobile" disabled={this.state.disabled} ref="mobile"
                       floatingLabelText="Mobile"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <DatePicker hintText="Effect Date" disabled={this.state.disabled} ref="effectDate" mode="landscape"
                        formatDate={this._formatDate} defaultDate={this.state.defaultDate}/>
          </div>
          <div className="col-md-3">
            <DatePicker hintText="Expired Date" disabled={this.state.disabled} ref="expiredDate" mode="landscape"
                        formatDate={this._formatDate} defaultDate={this.state.defaultDate}/>
          </div>
        </div>


        <If condition={this.state.mode == undefined}>
          <div className="row pull-right">
            <RaisedButton label="New" labelStyle={this.state.labelStyle} onClick={this._handleNewUser}/>
            <RaisedButton label="Edit" labelStyle={this.state.labelStyle} onClick={this._handleEditUser}/>
          </div>

          <Else/>

          <div className="row pull-right">
            <RaisedButton label="OK" labelStyle={this.state.labelStyle} onClick={this._handleOk}/>
            <RaisedButton label="Cancel" labelStyle={this.state.labelStyle} onClick={this._handleCancel}/>
          </div>
        </If>


      </div>
    );
  }
});

module.exports = UserForm;
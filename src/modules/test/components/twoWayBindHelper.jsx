/**
 * Created by shi.pengyan on 2015/8/25.
 */
import ObjectAssign from 'object-assign';
import ReactMixin from 'react-mixin';

export default class TwoWayBindHelper extends React.Component {

  constructor() {
    super();
    this.defaultStateObj = {message: 'shipengyan', message2: 'shipengyan'};
    this.state = ObjectAssign({}, this.defaultStateObj);
  }

  render() {
    var message = this.state.message;

    //不用mixin，
    var valueLink = {
      value: this.state.message2,
      requestChange: this._handleChangeWithOutLinkMixin
    };

    //return (<input type="text" value={message} onChange={this._handleChange}/>);
    return (
      <div className="container">
        <div className="row">
          <div>通过mixin实现</div>
          <input type="text" class="form-control" valueLink={this.linkState('message')}/>
          <button className="btn btn-default" onClick={this._handleBtnLookState}>Look State</button>
        </div>


        <div className="row">
          <div>通过valueLink实现</div>
          <input type="text" class="form-control" valueLink={valueLink}/>
          <button className="btn btn-default" onClick={this._handleBtnLookState2}>Look State</button>
        </div>
      </div>
    );
  }

  _handleChange = (event)=> {
    console.log(event.target.value);
    this.setState({message2: event.target.value});
  }

  _handleBtnLookState = ()=> {
    alert(this.state.message);
    console.log(this.state.message);
  }

  _handleChangeWithOutLinkMixin = (value)=> {
    console.log(value);
    this.setState({message2: value});
  }

  _handleBtnLookState2 = ()=> {
    alert(this.state.message2);
    console.log(this.state.message2);
  }
}


ReactMixin(TwoWayBindHelper.prototype, React.addons.LinkedStateMixin);
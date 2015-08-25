import React from 'react';


let {PureRenderMixin}= React.addons;

var initObj = {
  a: {b: {c: 'a'}}
};

function getInitObj() {
  return initObj;
}

var PureRenderMixinTest = React.createClass({

  mixins: [PureRenderMixin],

  getInitialState(){
    return getInitObj();
  },

  render(){
    return (
      <div>
        <div>a.b.c is {this.state.a.b.c}</div>
        <button onClick={this._handleABC}>change a.b.c when using PureRenderMixin</button>
      </div>
    );
  },

  _handleABC: function () {
    initObj.a.b.c = Math.random();
    this.setState(initObj);
    console.log('change a.b.c value event');
  }

});

module.exports = PureRenderMixinTest;

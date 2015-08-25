/**
 * Created by shi.pengyan on 2015/8/25.
 */


var Swapper = React.createClass({
  propTypes: {
    // `leftChildren` and `rightChildren` can be a string, element, array, etc.
    leftChildren: React.PropTypes.node,
    rightChildren: React.PropTypes.node,

    swapped: React.PropTypes.bool
  },

  getInitialState(){
    return {
      useFragment: false
    };
  },

  render: function () {
    var children;

    if (this.state.useFragment) {
      if (this.props.swapped) {
        children = React.addons.createFragment({
          right: this.props.rightChildren,
          left: this.props.leftChildren
        });
      } else {
        children = React.addons.createFragment({
          left: this.props.leftChildren,
          right: this.props.rightChildren
        });
      }

    } else {
      if (this.props.swapped) {
        children = [this.props.rightChildren, this.props.leftChildren];
      } else {
        children = [this.props.leftChildren, this.props.rightChildren];
      }
    }

    console.log('Swapper render');

    return (
      <div>
        <div>
          <label>
            <input type="radio" name="type" value="array" onChange={this._handleType}/>Array
          </label>
          <label>
            <input type="radio" name="type" value="createFragment" onChange={this._handleType}/>createFragment
          </label>
        </div>
        {children}
      </div>);
  },

  _handleType(e){
    e.target.value
    this.setState({useFragment: e.target.value === 'createFragment'});
  }
});

let CreateFragmentTest = React.createClass({

  getInitialState(){
    return {
      swapped: false
    };
  },

  render(){

    return (
      <div>
        <Swapper leftChildren={<span style={{marginLeft:'10px'}}>Left</span>}
                 rightChildren={<span style={{marginLeft:'10px'}}>Right</span>}
                 swapped={this.state.swapped}
          />

        <div>
          <button onClick={this._handleSwap}>Swap it</button>
        </div>
        <p style={{marginTop:"20px"}}>
          传递的对象的键(即，left 和 right)用来当作整个子组件组的键，并且对象的键的顺序是用于确定子组件呈现的顺序的。有了这个变化，两组孩子将在不被卸载的情况下，在 DOM 中正确地重新排序。

          createFragment 的返回值应该被视为一个不透明的对象；你可以使用 React.Children 助手来在片段中循环，但不应该直接访问它。还要注意我们依靠 JavaScript
          引擎保存对象枚举顺序，这不是由规范保证的，而是通过所有的主浏览器和非数字键对象的 VMs 实现的。
        </p>
      </div>
    );

  },

  _handleSwap: function () {
    this.setState({swapped: !this.state.swapped});
  }
});

module.exports = CreateFragmentTest;
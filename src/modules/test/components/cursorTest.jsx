/**
 * Created by shi.pengyan on 2015/8/25.
 */
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';


var ImmutableTest = React.createClass({

  getInitialState(){
    this.initState = Immutable.fromJS({a: {b: {c: 1}}});

    return {
      obj: this.initState
    };
  },

  render(){
    return (
      <div>
        <div>a.b.c is {this.state.obj.getIn(['a', 'b', 'c'])}</div>
        <button onClick={this._handleByCursor}>change by cursor</button>
      </div>
    );
  },

  _handleByCursor: function () {
    console.log('handle cursor');
    var cursor = Cursor.from(this.initState, ['a', 'b'], newData => {
      this.initState = newData;
    });

    // ... elsewhere ...
    cursor.get('c'); // 1
    cursor = cursor.update('c', x => x + 1); //调用onChange
    cursor.get('c'); // 2

    // ... back to data ...
    this.initState.getIn(['a', 'b', 'c']); // 2


    this.setState({obj: this.initState});
  }


});

module.exports = ImmutableTest;
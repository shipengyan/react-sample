/**
 * Created by shi.pengyan on 2015/8/25.
 */

let {PureRenderMixin} = React.addons;

var PureRenderMixinTest = require('./components/pureRenderMixin');

var TestIndex = React.createClass({

  mixins: [PureRenderMixin],

  render: function () {
    return (
      <div>
        <PureRenderMixinTest/>
      </div>
    );
  }
});

module.exports = TestIndex;
/**
 * Created by shi.pengyan on 2015/8/25.
 */
var Router = require('react-router');

let {PureRenderMixin} = React.addons;
let { RouteHandler} = Router;


var TestIndex = React.createClass({

  mixins: [PureRenderMixin],

  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = TestIndex;
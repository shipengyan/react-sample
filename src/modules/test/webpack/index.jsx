/**
 * Created by shi.pengyan on 2015/9/8.
 */

var Router = require('react-router');

let {PureRenderMixin} = React.addons;
let { RouteHandler} = Router;


var WebpackIndex = React.createClass({

  mixins: [PureRenderMixin],

  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = WebpackIndex;
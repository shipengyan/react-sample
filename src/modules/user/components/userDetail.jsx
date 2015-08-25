/**
 * Created by shi.pengyan on 2015/8/20.
 */

let {PureRenderMixin} = React.addons;

var UserDetail = React.createClass({

  mixins: [PureRenderMixin],

  render: function () {


    var userId = this.props.params.userId;
    var status = this.props.query.status;

    return (
      <div>Bingo! 用户ID：{userId},状态：{status}</div>
    );
  }
});

module.exports = UserDetail;
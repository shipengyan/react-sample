/**
 * Created by shi.pengyan on 2015/9/6.
 */
export default class ES6 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var username = 'shipengyan';

    return (
      <div>
        <div className="row"> 测试模板字符串：{`username is ${username}`}        </div>
        <div className="row">
          <button className="btn btn-primary" onClick={this._handleArgumentsClick.bind(this,'1')}>
            不使用 arguments, 采用rest语法... 数组获取参数
          </button>
        </div>
      </div>
    );
  }

  _handleArgumentsClick = (...args)=> {

    console.log(arguments);
    console.log(args);

  }

}
/**
 * Created by shi.pengyan on 2015/9/6.
 */
export default class ES6 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this._handleArgumentsClick.bind(this,'1')}>不使用 arguments,
          采用rest语法... 数组获取参数
        </button>
      </div>
    );
  }

  _handleArgumentsClick = (...args)=> {

    console.log(arguments);
    console.log(args);

  }

}
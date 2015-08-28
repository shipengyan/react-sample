/**
 * Created by shi.pengyan on 2015/8/28.
 */

/**
 * 测试按需加载模块
 */
export default class TestRequireModule extends React.Component {

  constructor() {
    super();
    console.log('this is constructor');
  }

  render() {
    return (
      <div className="container" style={{height:'100px'}}>
        <div className="panel panel-info">
          <div className="panel-heading">Hi, xiaobing!</div>
          <div className="panel-body">
            <p> This is Lazy module by need.</p>
          </div>
        </div>
      </div>
    );
  }
}
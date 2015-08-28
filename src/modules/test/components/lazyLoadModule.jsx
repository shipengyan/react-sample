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
    return (<div className="container" style={{height:'100px'}}> This is Lazy module by need.</div>);
  }
}
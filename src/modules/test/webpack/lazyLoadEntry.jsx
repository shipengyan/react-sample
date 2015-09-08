/**
 * Created by shi.pengyan on 2015/8/28.
 */

export default class TestRequire extends React.Component {
  constructor() {
    super();
  }

  _hanldeBtnClick = () => {
    //TODO 按需加载模块内容，这点对于模块化加载很重要
    require.ensure(['./lazyLoadModule'], (require)=> {
      let LazyModule = require('./lazyLoadModule');

      React.render(<LazyModule/>, this.refs.a.getDOMNode()); // looks good

      let dom = React.findDOMNode(this);
      console.log('TestRequire DOM Node is', dom); // 当前整个DOM
      console.log('will mount node', this.refs.a.getDOMNode());//引用的DOM

    }, 'test/webpack/requireModule'); //模块名很重要，对应chunk的name
  }

  render() {
    console.log('test require.sure');

    return (
      <div>
        test require.sure
        <div ref="a"/>
        <button onClick={this._hanldeBtnClick.bind(this)}>按需加载模块，非路由方式</button>
      </div>
    );
  }
}
/**
 * Created by shi.pengyan on 2015/8/28.
 */

export default class TestRequire extends React.Component {

  render() {
    console.log('test require.sure');

    //TODO 按需加载模块内容，这点很重要对于模块化加载
    require.ensure(['./testRequire2'], function () {
      var util = require('./testRequire2');
      console.log(util.test());
    }, 'testRequire2');


    return (
      <div>
        test require.sure
      </div>
    );
  }
}
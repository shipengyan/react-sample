/**
 * Created by shi.pengyan on 2015/8/27.
 */
import Router from 'react-router';

const {RouteHandler}= Router;

export default class Home extends React.Component {

  render() {
    console.log('Antd Home render');
    return (
      <div>
        <div>Ant Design Home</div>
        <RouteHandler/>
      </div>
    );
  }
}
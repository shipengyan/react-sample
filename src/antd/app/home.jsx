/**
 * Created by shi.pengyan on 2015/8/27.
 */
import Router from 'react-router';

const {RouteHandler, Link}= Router;

export default class Home extends React.Component {

  render() {
    console.log('Antd Home render');
    return (
      <div className="container">
        <div className="panel panel-info">
          <div className="panel-heading">Ant Design Home</div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item"><Link to="/validation">Validation</Link></li>
            </ul>
          </div>
        </div>

        <div className="panel">
          <div className="panel-body">
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
}
/**
 * Created by shi.pengyan on 2015/8/26.
 */


export default class BaseComponent extends React.Component {

  constructor() {
    console.log('Base Component');
  }

  //bind this for method
  _bind(...methods) {
    methods.forEach((method)=> this[method] = this[method].bind(this));
  }


};
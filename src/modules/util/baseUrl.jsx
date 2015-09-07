/**
 * Created by shi.pengyan on 2015/9/7.
 */

import config from '../config';
import {resolve} from 'url';

export default  (url)=> {
  return resolve(config.webRoot, url);
}

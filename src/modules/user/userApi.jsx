/**
 * Created by shi.pengyan on 2015/9/7.
 */

import baseUrl from '../util/baseUrl';

export function getUsers() {
  return $.getJSON(baseUrl('static/test/user.json'));
}

export function getLoadAjaxError() {
  return $.getJSON(baseUrl('wrongpath.json')); // 不存在的一个地址
}
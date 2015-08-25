/**
 * Created by shi.pengyan on 2015/8/25.
 */
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var data = Immutable.fromJS({a: {b: {c: 1}}});
var cursor = Cursor.from(data, ['a', 'b'], function (newData) {
  data = newData;
});

// ... elsewhere ...

cursor.get('c'); // 1
cursor = cursor.update('c', function (x) {
  return x + 1;
});
cursor.get('c'); // 2


console.log(data.toString());
// ... back to data ...

data.getIn(['a', 'b', 'c']); // 2
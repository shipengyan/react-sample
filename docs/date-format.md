# date-format

## API
* Date.format(dateObject, format)
* dateObject.toFormattedString(format)
* Date.parseFormatted(value, format)
* dateObject.fromFormattedString(value, format)

## Usage

````
var d = new Date(2001, 1, 3, 4, 5, 6, 7);

// Date object static function call
Date.format(d, 'dd.MM.yyyy. HH:mm:ss.zzz');    // "03.02.2001. 04:05:06.007"

// Date object member function call
d.toFormattedString('yyyy-MM-dd');             // "2001-02-03"

// Date object static function call - will return a valid Date object
d = Date.parseFormatted('03.02.2001. 04:05:06.007', 'dd.MM.yyyy. HH:mm:ss.zzz');

// Date object member function call - will update the calling object with the
//                                    provided value
d.fromFormattedString('2001-02-03', 'yyyy-MM-dd');
````

createMap
=======

linear map for the browser and node.js


```javascript
var createMap = require("@nathanfaucett/create_map");


var map = createMap();


var nan = NaN,
    object = {},
    array = [],
    number = 10;

map.set(nan, "NaN");
map.set(object, "{}");
map.set(array, "[]");
map.set(number, "10");

console.log(
    map.get(nan),
    map.get(object),
    map.get(array),
    map.get(number)
);

```

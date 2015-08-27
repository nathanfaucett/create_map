var tape = require("tape"),
    createMap = require("..");


tape("createMap() should create Map like store", function(assert) {
    var map = createMap(),

        nan = NaN,
        object = {},
        array = [],
        number = 10;

    map.set(nan, "NaN");
    map.set(object, "{}");
    map.set(array, "[]");
    map.set(number, "10");

    assert.equals(map.size(), 4);

    assert.equals(map.get(nan), "NaN");
    assert.equals(map.get(object), "{}");
    assert.equals(map.get(array), "[]");
    assert.equals(map.get(number), "10");

    assert.equals(map.remove(number), true);
    assert.equals(map.get(number), undefined);
    assert.equals(map.size(), 3);

    assert.equals(map.key(1), object);
    assert.equals(map.value(1), "{}");

    map.clear();
    assert.equals(map.size(), 0);

    assert.end();
});

var tape = require("tape"),
    createMap = require("..");


tape("createMap() should create Map like store", function(assert) {
    var map = createMap(),

        object = {},
        array = [],
        number = 10;

    map.set(object, "{}");
    map.set(array, "[]");
    map.set(number, "10");

    assert.deepEquals(map.keys(), [object, array, number]);
    assert.deepEquals(map.values(), ["{}", "[]", "10"]);

    assert.equals(map.size(), 3);
    assert.deepEquals(map.toArray(), [
        [object, "{}"],
        [array, "[]"],
        [number, "10"]
    ]);

    assert.equals(map.get(object), "{}");
    assert.equals(map.get(array), "[]");
    assert.equals(map.get(number), "10");

    assert.equals(map.remove(number), true);
    assert.equals(map.get(number), undefined);
    assert.equals(map.size(), 2);

    assert.deepEquals(map.keys(), [object, array]);
    assert.deepEquals(map.values(), ["{}", "[]"]);
    assert.deepEquals(map.toArray(), [
        [object, "{}"],
        [array, "[]"]
    ]);

    map.clear();
    assert.equals(map.size(), 0);

    assert.end();
});

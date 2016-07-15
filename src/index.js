var isEqual = require("@nathanfaucett/is_equal");


module.exports = createMap;


function createMap() {
    var keys = [],
        values = [];

    return {
        get: function(key) {
            return getValue(key, keys, values);
        },
        set: function(key, value) {
            var index = getIndex(key, keys);

            if (index !== -1) {
                values[index] = value;
            } else {
                index = keys.length;
                keys[index] = key;
                values[index] = value;
            }
        },
        has: function(key) {
            return getIndex(key, keys) !== -1;
        },
        remove: function(key) {
            var index = getIndex(key, keys);

            if (index !== -1) {
                keys.splice(index, 1);
                values.splice(index, 1);
                return true;
            } else {
                return false;
            }
        },
        keys: function() {
            return keys.slice();
        },
        values: function() {
            return values.slice();
        },
        key: function(index) {
            return keys[index];
        },
        value: function(index) {
            return getValue(keys[index], keys, values);
        },
        size: function() {
            return keys.length;
        },
        clear: function() {
            keys.length = 0;
            values.length = 0;
        }
    };
}

function getValue(key, keys, values) {
    var index = getIndex(key, keys);

    if (index !== -1) {
        return values[index];
    } else {
        return undefined;
    }
}

function getIndex(key, keys) {
    var i = keys.length;

    while (i--) {
        if (isEqual(key, keys[i])) {
            return i;
        }
    }

    return -1;
}

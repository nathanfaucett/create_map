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
            }

            return false;
        },
        keys: function() {
            return copyArray(keys);
        },
        values: function() {
            return copyArray(values);
        },
        key: function(index) {

            return keys[index];
        },
        value: function(index) {

            return getValue(keys[index], keys, values);
        },
        size: function() {
            return keys.length;
        }
    };
}

function getValue(key, keys, values) {
    var index = getIndex(key, keys);

    return index !== -1 ? values[index] : undefined;
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

function isEqual(a, b) {
    return a === b || (a !== a && b !== b);
}

function copyArray(array) {
    var result = [],
        i = array.length;

    while (i--) {
        result[i] = array[i];
    }
    return result;
}

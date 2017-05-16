var has = require("@nathanfaucett/has"),
    values = require("@nathanfaucett/values"),
    hashCode = require("@nathanfaucett/hash_code");


module.exports = createMap;


function createMap() {
    var hash = {},
        count = 0;

    return {
        get: function(key) {
            var hashKey = hashCode(key);

            if (has(hash, hashKey)) {
                return hash[hashKey][1];
            } else {
                return void(0);
            }
        },
        set: function(key, value) {
            var hashKey = hashCode(key);

            if (has(hash, hashKey)) {
                hash[hashKey][1] = value;
            } else {
                count++;
                hash[hashKey] = [key, value];
            }
        },
        has: function(key) {
            return has(hash, hashCode(key));
        },
        remove: function(key) {
            var hashKey = hashCode(key);

            if (has(hash, hashKey)) {
                count--;
            }

            return delete hash[hashKey];
        },
        keys: function() {
            var vs = values(hash),
                i = -1,
                il = count - 1,
                array = new Array(count);

            while (i++ < il) {
                array[i] = vs[i][0];
            }

            return array;
        },
        values: function() {
            var vs = values(hash),
                i = -1,
                il = count - 1,
                array = new Array(count);

            while (i++ < il) {
                array[i] = vs[i][1];
            }

            return array;
        },
        toArray: function() {
            return values(hash);
        },
        size: function() {
            return count;
        },
        clear: function() {
            hash = {};
            count = 0;
        }
    };
}

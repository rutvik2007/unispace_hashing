"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var hash_fn = function (str) {
    // there's probably a better way to do this
    return crypto.createHash("sha1").update(str).digest().readUint32LE();
};
var kv = new UnispaceKVStore(hash_fn, 10, 3, 10).getObj({ "hi": "hornet", "bye": "helpss" });

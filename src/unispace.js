"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
var Indexer = /** @class */ (function () {
    function Indexer(hash_fn, nDims, nRegions, nNodes) {
        // TODO: Validation of constructor params
        this.hash_fn = hash_fn;
        this.nDims = nDims;
        this.nRegions = nRegions;
        this.nNodes = nNodes;
    }
    Indexer.prototype.getNode = function (obj) {
        var coordinate_vector = new Array(this.nDims).fill(0);
        for (var key in obj) {
            var index = this.hash_fn(key) % this.nDims;
            var value = this.hash_fn(obj[key]) % this.nRegions;
            coordinate_vector[index] = value;
        }
        console.log(coordinate_vector);
    };
    return Indexer;
}());
var hash_fn = function (str) {
    // probably a better way to do this
    return crypto.createHash("sha1").update(str).digest().readUint32LE();
};
var i = new Indexer(hash_fn, 10, 3, 10).getNode({ "hi": "hornet", "bye": "helpss" });

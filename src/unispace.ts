import * as crypto from "crypto";

interface StrObj {
    [key: string]: string
}

class Node {
    
}

class Indexer {
    hash_fn: (str: string) => number;
    nDims: number;
    nRegions: number;
    nNodes: number;
    constructor(hash_fn: (str: string) => number, nDims, nRegions, nNodes: number) {
        // TODO: Validation of constructor params
        this.hash_fn = hash_fn;
        this.nDims = nDims;
        this.nRegions = nRegions;
        this.nNodes = nNodes;
    }

    getNode(obj: StrObj) {
        let coordinate_vector = new Array<number>(this.nDims).fill(0);
        for (const key in obj) {
            let index = this.hash_fn(key) % this.nDims;
            let value = this.hash_fn(obj[key]) % this.nRegions;
            coordinate_vector[index] = value;
        }        
        console.log(coordinate_vector);
    }
}

let hash_fn = (str: string) => {
    // probably a better way to do this
    return crypto.createHash("sha1").update(str).digest().readUint32LE();
}

let i = new Indexer(hash_fn, 10, 3, 10).getNode({"hi": "hornet", "bye": "helpss"});

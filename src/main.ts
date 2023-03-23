import * as crypto from "crypto";

let hash_fn = (str: string) => {
    // there's probably a better way to do this
    return crypto.createHash("sha1").update(str).digest().readUint32LE();
}

let kv = new UnispaceKVStore(hash_fn, 10, 3, 10).getObj({"hi": "hornet", "bye": "helpss"});
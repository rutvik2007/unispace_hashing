class UnispaceIndexer implements Indexer {
    hashFn: (str: string) => number;
    nDims: number;
    nRegions: number;
    catchAll: Array<number>;

    constructor(hashFn: (str: string) => number, nDims, nRegions, nNodes: number) {
        // TODO: Validation of constructor params
        this.hashFn = hashFn;
        this.nDims = nDims;
        this.nRegions = nRegions;
        this.catchAll = Array<number>(this.nRegions).map((v, i, arr) => i)
    }

    // get the node responsible for an
    getNodes(query: StrObj) {
        // first count the number of wildcards
        let coordinate_vector = Array<number|Array<number>>(this.nDims).fill(0);
        const keys = Object.keys(query).sort()
        for (const key in keys) {
            let index = this.hashFn(key) % this.nDims;
            if (query[key] !== "*") {
                let value = this.hashFn(query[key]) % this.nRegions;
                coordinate_vector[index] = value;
            } else {
                // we have a catchall
                coordinate_vector[index] = this.catchAll
            }
        }        
        // console.log(coordinate_vector);
        // more logic here to get the list of ids that correspond to the query

        return new Array<VNodeId>();
    }
}
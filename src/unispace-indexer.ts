class UnispaceIndexer implements Indexer {
    hash_fn: (str: string) => number;
    nDims: number;
    nRegions: number;

    constructor(hash_fn: (str: string) => number, nDims, nRegions, nNodes: number) {
        // TODO: Validation of constructor params
        this.hash_fn = hash_fn;
        this.nDims = nDims;
        this.nRegions = nRegions;
    }

    // get the node responsible for an
    getNodes(query: StrObj) {
        // first count the number of wildcards
        let coordinate_vector = Array<number|Array<number>>(this.nDims).fill(0);
        for (const key in query) {
            if (query[key] !== "*") {
                let index = this.hash_fn(key) % this.nDims;
                let value = this.hash_fn(query[key]) % this.nRegions;
                coordinate_vector[index] = value;
            }
            
        }        
        // console.log(coordinate_vector);
        // more logic here to get the list of ids that correspond to the query

        return new Array<VNodeId>();
    }
}
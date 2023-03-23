interface NodeSet {
    [key: number]: VNode
}

class UnispaceKVStore {
    nodes: NodeSet;
    indexer: UnispaceIndexer;
    
    constructor(hash_fn: (str: string) => number, nDims, nRegions, nNodes: number) {
        this.indexer = new UnispaceIndexer(hash_fn, nDims, nRegions, nNodes);
        this.nodes = {};
        for (let i = 0; i < nNodes; i++) {
            this.nodes[i] = new VNode();
        }
    }

    getObj(query: StrObj) {
        const nodesIds = this.indexer.getNodes(query);
        const objs = new Array<StrObj>();
        for (let i = 0; i < nodesIds.length; i++) {
            const node = this.nodes[nodesIds[i]];
            objs.push(...node.getObj(query));
        }
        return objs;
    }

    putObj(obj: StrObj) {

    }
}
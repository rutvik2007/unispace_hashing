class VNode {
    objs: Array<StrObj>;
    id: VNodeId;

    constructor() {
        this.objs = new Array<StrObj>();
    }

    getObj(query: StrObj) {
        const matchedObjs = new Array<StrObj>();
        for (let i = 0; i < this.objs.length; i++) {
            const obj = this.objs[i];
            if (_.isMatch(obj, query)) {
                matchedObjs.push(obj);
            }
        }
        return matchedObjs;
    }


    putObj(obj: StrObj) {
        // should we be checking for unique objects???
        if (this.getObj(obj).length == 0) {
            this.objs.push(obj)
        }
    }
}

module.exports = VNode;
interface StrObj {
    [key: string]: string
}

type VNodeId = number & { readonly '': unique symbol };
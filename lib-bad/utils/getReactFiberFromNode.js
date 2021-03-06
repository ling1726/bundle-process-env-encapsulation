var WorkTag;
(function (WorkTag) {
    WorkTag[WorkTag["FunctionComponent"] = 0] = "FunctionComponent";
    WorkTag[WorkTag["ClassComponent"] = 1] = "ClassComponent";
    WorkTag[WorkTag["IndeterminateComponent"] = 2] = "IndeterminateComponent";
    WorkTag[WorkTag["HostRoot"] = 3] = "HostRoot";
    WorkTag[WorkTag["HostPortal"] = 4] = "HostPortal";
    WorkTag[WorkTag["HostComponent"] = 5] = "HostComponent";
    WorkTag[WorkTag["HostText"] = 6] = "HostText";
    WorkTag[WorkTag["Fragment"] = 7] = "Fragment";
    WorkTag[WorkTag["Mode"] = 8] = "Mode";
    WorkTag[WorkTag["ContextConsumer"] = 9] = "ContextConsumer";
    WorkTag[WorkTag["ContextProvider"] = 10] = "ContextProvider";
    WorkTag[WorkTag["ForwardRef"] = 11] = "ForwardRef";
    WorkTag[WorkTag["Profiler"] = 12] = "Profiler";
    WorkTag[WorkTag["SuspenseComponent"] = 13] = "SuspenseComponent";
    WorkTag[WorkTag["MemoComponent"] = 14] = "MemoComponent";
    WorkTag[WorkTag["SimpleMemoComponent"] = 15] = "SimpleMemoComponent";
    WorkTag[WorkTag["LazyComponent"] = 16] = "LazyComponent";
    WorkTag[WorkTag["IncompleteClassComponent"] = 17] = "IncompleteClassComponent";
    WorkTag[WorkTag["DehydratedFragment"] = 18] = "DehydratedFragment";
    WorkTag[WorkTag["SuspenseListComponent"] = 19] = "SuspenseListComponent";
    WorkTag[WorkTag["FundamentalComponent"] = 20] = "FundamentalComponent";
    WorkTag[WorkTag["ScopeComponent"] = 21] = "ScopeComponent";
})(WorkTag || (WorkTag = {}));
export function getReactFiberFromNode(elm) {
    if (!elm) {
        return null;
    }
    for (var k in elm) {
        // React 16 uses "__reactInternalInstance$" prefix
        // React 17 uses "__reactFiber$" prefix
        // https://github.com/facebook/react/pull/18377
        if (k.indexOf('__reactInternalInstance$') === 0 || k.indexOf('__reactFiber$') === 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return elm[k];
        }
    }
    throw new Error('getReactFiber(): Failed to find a React Fiber on a node');
}
//# sourceMappingURL=getReactFiberFromNode.js.map
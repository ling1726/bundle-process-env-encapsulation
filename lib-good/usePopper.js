import { getReactFiberFromNode } from "./utils/getReactFiberFromNode";

export function usePopper() {
    if (false) {
        console.log('should not be in prod');
    }

    // Webpack replaces this with the above
    if (process.env.NODE_ENV !== 'production') {
        getReactFiberFromNode();
    }
}


import { getReactFiberFromNode } from './utils/getReactFiberFromNode';
import { isProd } from './env';


export function usePopper() {
    if (!isProd) {
        getReactFiberFromNode();
    }
}


import { isProd } from './env';

export function usePopper() {
    if (!isProd) {
        console.log('Should not be in prod')
    }
}


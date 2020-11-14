import { createContext } from 'react';

// configure context
const GlobalState = createContext([{}, () => {}]);

export {
    GlobalState
}
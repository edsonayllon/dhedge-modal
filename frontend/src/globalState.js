import { createContext } from 'react';

const GlobalState = createContext([{}, () => {}]);

export { GlobalState }
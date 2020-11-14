import { createContext } from 'react';

const GlobalState = createContext([{}, () => {}]);

const initialState = {
    openModal: false
} 

export {
    GlobalState,
    initialState
}
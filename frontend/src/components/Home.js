import { useContext } from 'react';
import { GlobalState } from 'globalState'; 

export const Home = () => {
    const [state, setState] = useContext(GlobalState);
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={() => setState(state => ({...state, openModal: true }))}>Open Modal</button>

        </header>
    );
}
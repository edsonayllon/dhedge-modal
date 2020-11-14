import { useState } from 'react';
import './App.css';
import { Modal, Content } from 'components';
import { GlobalState, initialState } from 'globalState';

const App = () => {
  const [state, setState] = useState(initialState);
  return (
    <GlobalState.Provider value={[state, setState]}>
      <div className="App">
        <Modal />
        <Home />
      </div>
    </GlobalState.Provider>
  );
}

export default App;

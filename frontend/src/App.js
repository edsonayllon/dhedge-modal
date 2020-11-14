import { useState } from 'react'
import './App.css';
import { Fund } from 'containers/Fund'
import { Modal } from 'components'
import { GlobalState, initialState } from 'globalState'

const poolName = "Convex Strategies"

const App = props => {
  const [state, setState] = useState(props.initialState)

  return (
    <GlobalState.Provider value={[state, setState]}>
      <div className="App">
        { state.modal.active && (<Modal/>)}
        <Fund poolName = {poolName}/> 
      </div>
    </GlobalState.Provider>
  );
}

export default App;

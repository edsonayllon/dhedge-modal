import { useState } from 'react'
import './App.css';
import { Fund } from 'containers/Fund'
import { Modal } from 'components'
import { GlobalState, initialState } from 'globalState'

const poolName = "Convex Strategies"

const App = () => {
  const [state, setState] = useState(initialState)

  return (
    <GlobalState.Provider value={[state, setState]}>
      <div className="App">
        <Modal poolName = {poolName}/>
        <Fund poolName = {poolName}/> 
      </div>
    </GlobalState.Provider>
  );
}

export default App;

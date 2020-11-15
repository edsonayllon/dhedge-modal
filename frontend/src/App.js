import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import { Fund } from 'containers/Fund'
import { Modal } from 'components'
import { GlobalState } from 'globalState'

const poolName = 'Convex Strategies'

const App = props => {
  const [state, setState] = useState(props.initialState)

  return (
    <GlobalState.Provider value={[state, setState]}>
      <div className="App">
        { state.modal.active && (<Modal/>)}
        <Fund poolName = {poolName}/>
      </div>
    </GlobalState.Provider>
  )
}

App.propTypes = {
  initialState: PropTypes.object
}

export default App

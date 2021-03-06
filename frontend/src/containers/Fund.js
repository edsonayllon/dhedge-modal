import React, { useContext } from 'react'
import { Button } from 'antd'
import { GlobalState } from 'globalState'
import PropTypes from 'prop-types'

const Fund = props => {
  const { poolName } = props
  const [state, setState] = useContext(GlobalState)
  const handleOpenModal = () => setState({ ...state, modal: { active: true, poolName } })
  const handleConnect = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    setState({ ...state, account: { address: accounts[0] } })
  }
  return (
        <div className = "fund-container">
            <div className="header">
                { state.account.address
                  ? `${state.account.address.slice(0, 6)}...`
                  : <Button className = "right" type="primary" onClick={handleConnect} disabled = {state.account.address}>
                        Connect Wallet
                      </Button>
                }
            </div>
            <div>
                <div className="fund-title flex row">
                    <h1>
                        {poolName}
                    </h1>
                    <div className="flex column">
                        <span className="percent positive">26.38%</span>
                        <span className="desc-label">since inception</span>
                    </div>

                </div>

                { state.account.address
                  ? <Button onClick={handleOpenModal} size="large" type="primary" >Invest</Button>
                  : <Button disabled size="large" >Invest</Button>
                }

            </div>
        </div>
  )
}

Fund.propTypes = {
  poolName: PropTypes.string
}

export { Fund }

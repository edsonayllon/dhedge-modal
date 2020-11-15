import Web3 from 'web3'
import { addressSUSD, minErc20 } from 'const'

// configure initial state
const configureStore = async () => {
  const web3 = new Web3(Web3.givenProvider)
  const erc20 = new web3.eth.Contract(minErc20, addressSUSD)
  const initialState = {
    modal: {
      active: false
    },
    openModal: false,
    web3,
    contracts: {
      erc20
    },
    account: {
      address: '',
      balanceSUSD: 0,
      decimalsSUSD: 0
    }
  }
  console.log('✓ Created Store')
  return { initialState }
}

export { configureStore }

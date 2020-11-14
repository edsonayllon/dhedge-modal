import { useContext, useState, useEffect } from 'react';
import { 
    Button,
    InputNumber
} from 'antd' 
import { GlobalState } from 'globalState';

export const Modal = () => {
    const [state, setState] = useContext(GlobalState);
    const { modal, web3, contracts, account } = state;
    const { active, poolName } = modal;
    const [investment, setInvestment] = useState(0);
    const [balance, setBalance] = useState(0);
    const [decimals, setDecimals] = useState(0);

    const handleCloseModal = () => setState({...state, modal: { active: false } });
    const balanceDecimals = () => balance / (10 ** decimals);

    const onInput = value => {
        if (value > balanceDecimals()) {
            setMaxBalance()
        } else {
            setInvestment(value);
        }
    }

    const setMaxBalance = () => setInvestment(balanceDecimals());;

    const calcPercentInvestment = (percent) => {
        if (percent > 1) percent = 1;
    }

    const getBalance = () => {
        if (active) {
            contracts.erc20.methods.balanceOf(account.address).call().then(gotBalance => {
                setBalance(gotBalance);
            })
            contracts.erc20.methods.decimals().call().then(gotDecimals => {
                setDecimals(gotDecimals);
            })
        }
    }

    useEffect(getBalance, [])
    return (
        <div className="modal-container">
            <div className="modal-content flex row">
                <div className="flex column flex-one padd16">
                    <h2>Invest in {poolName}</h2>
                    <hr/>
                    <h3 className="caps">Summary</h3>
                    <hr/>
                </div>
                <div className="flex column lighten flex-two padd16 space-between">
                    <div className="flex column">
                        <div className="row space-between">
                            <a onClick={setMaxBalance}>balance: {balanceDecimals()}</a>
                        </div>
                        <div className = "row">
                            <InputNumber 
                                className="width-100" min={0} defaultValue={3} 
                                onChange={onInput} size="large" color="blue-1" 
                                value={investment}/>
                        </div>
                        
                    </div>
                    <div className="row width-100 flex-end flex" >
                        <Button  className="flex-one" onClick={handleCloseModal} size="large">
                            Cancel
                        </Button>
                        <Button className="mgl-16 flex-one" onClick={handleCloseModal} size="large" type="primary">
                            Confirm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

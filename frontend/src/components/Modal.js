import { useContext, useState, useEffect } from 'react';
import { 
    Button,
    InputNumber,
    Slider
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

    const calcInvestmentFromPercent = (percent) => {
        if (percent > 100) percent = 100;
        setInvestment( balanceDecimals() * percent / 100 );
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

    const marks = {
        0: '0%',
        25: '25%',
        50: '50%',
        75: '75%',
        100: '100%'
    };

    useEffect(getBalance, [])
    return (
        <div className="modal-container">
            <div className="modal-content flex row">
                <div className="flex column flex-one padd-32">
                    <h2>Invest in {poolName}</h2>
                    <hr/>
                    <h3 className="caps">Summary</h3>
                    <hr/>
                </div>
                <div className="flex column lighten flex-two padd-32 space-between">
                    <div className="flex column">
                        <div className="row flex space-between mb-16">
                            <span className="caps">Invest with</span>
                            <a onClick={setMaxBalance}>Balance: {balanceDecimals().toFixed(3)}</a>
                        </div>
                        <div className = "flex row">
                            <div className = "input-symbol">
                                $ sUSD
                            </div>
                            <InputNumber 
                                className="width-100 symbol-padding text-align-right" min={0} defaultValue={3} 
                                onChange={onInput} size="large" color="blue-1" 
                                value={investment}/>
                        </div>
                        <Slider marks={marks} defaultValue={0} onChange={value => calcInvestmentFromPercent(value)} value ={100 * investment / balanceDecimals()}/>
                        
                    </div>
                    <div className="row width-100 flex-end flex" >
                        <Button  className="flex-one" onClick={handleCloseModal} size="large">
                            Cancel
                        </Button>
                        <Button className="ml-16 flex-one" onClick={handleCloseModal} size="large" type="primary">
                            Confirm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

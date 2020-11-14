import { useContext, useState } from 'react';
import { 
    Button,
    InputNumber
} from 'antd' 
import { GlobalState } from 'globalState';

export const Modal = () => {
    const [state, setState] = useContext(GlobalState);
    const { modal, web3 } = state;
    const [investment, setInvestment] = useState(0);
    const [balance, setBalance] = useState(new web3.utils.BN('0'));
    const [decimals, setDecimals] = useState(new web3.utils.BN('0'));
    
    
    const { active, poolName } = modal;
    const onInput = value => setInvestment(value);
    const handleCloseModal = () => setState({...state, modal: { active: false } });
    return (
        <div>
            { active && (
                <div className="modal-container">
                    <div className="modal-content flex row">
                        <div className="flex column flex-one padd16">
                            <h2>Invest in {poolName}</h2>
                            <hr/>
                            <h3 className="caps">Summary</h3>
                            <hr/>
                        </div>
                        <div className="flex column lighten flex-two padd16 space-between">
                            <div className="column">
                                <p>balance: {balance.toString()}</p>
                                <InputNumber min={0} defaultValue={3} onChange={onInput} size="large" color="blue-1" value={investment}/>
                            </div>
                            <div className="row space-between" >
                                <Button onClick={handleCloseModal}>Cancel</Button>
                                <Button onClick={handleCloseModal} type="primary">Confirm</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

import { useContext } from 'react';
import { GlobalState } from 'globalState'; 

export const Modal = () => {
    const [state, setState] = useContext(GlobalState);
    const { modal } = state;
    const { active, poolName } = modal
    const handleCloseModal = () => setState({...state, modal: { active: false } });
    return (
        <div>
            { active && (
                <div className="modal-container">
                    <div className="modal-content flex row">
                        <div className="flex column">
                            <h2>{poolName}</h2>
                        </div>
                        <div className="flex column lighten">
                            <button onClick={handleCloseModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

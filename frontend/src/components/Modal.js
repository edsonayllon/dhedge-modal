import { useContext } from 'react';
import { GlobalState } from 'globalState'; 

export const Modal = () => {
    const [state, setState] = useContext(GlobalState);
    const { openModal } = state;
    return (
        <div>
            { openModal && (
                <div className="modal-container">
                    <div className="modal-content">
                        <button onClick={() => setState(state => ({...state, openModal: false }))}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    )
}

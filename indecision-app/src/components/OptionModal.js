import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} // use props to use modal or not.
        contentLabel={props.selectedOption}
        onRequestClose={props.handleModalPick}
    >
        <h3>{props.selectedOption}</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={() => {
            props.handleModalPick(props.selectedOption);
        }}>Okay</button>
    </Modal>
);

export default OptionModal;

// create a new event handler in indecisionapp that clears selectedOption state.
// pass that into option modal
// call it on the button click.
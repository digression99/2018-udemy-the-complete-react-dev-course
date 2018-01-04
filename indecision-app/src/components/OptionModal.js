import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} // use props to use modal or not.
        contentLabel={props.selectedOption}
        onRequestClose={props.handleModalPick}
        closeTimeoutMS={500}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            className="button"
            onClick={() => {
            props.handleModalPick(props.selectedOption);
        }}>Okay</button>
    </Modal>
);

export default OptionModal;

// create a new event handler in indecisionapp that clears selectedOption state.
// pass that into option modal
// call it on the button click.
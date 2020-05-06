import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Modal from 'react-modal';
import {startSetName} from '../actions/userActions';

const NameModal = () => {
  const dispatch = useDispatch();

  // initializing local state
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState('');

  // user form and submission handlers
  const handleNameUpdate = (e) => {
    const newName = e.target.value;

    if (newName.length < 15) {
      setName(newName);
    }
  };

  const handleNameSubmission = (e) => {
    e.preventDefault();

    if (name) {
      dispatch(startSetName(name));
      setIsOpen(false);
    }
  };

  const handleCloseModal = () => {
    if (name) {
      dispatch(startSetName(name));
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Modal
        className="modal modal--triangle"
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
      >
        <div className="modal__top-left-triangle" />
        <div className="modal__bottom-right-triangle" />
        <form className="modal__sub-container" onSubmit={handleNameSubmission}>
          <h2 className="modal__title">Name</h2>
          <input
            className="modal__input"
            autoFocus
            value={name}
            onChange={handleNameUpdate}
          />
          <button className="modal__button" type="submit">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default NameModal;

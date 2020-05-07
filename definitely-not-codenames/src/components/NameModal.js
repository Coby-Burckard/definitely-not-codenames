import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import classnames from 'classnames';
import Modal from 'react-modal';
import {startSetName} from '../actions/userActions';
import {NORMAL_TIME} from '../constants/animation';

const NameModal = () => {
  const dispatch = useDispatch();

  // initializing local state
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState('');
  const [isOpaque, setIsOpaque] = useState(true);

  // user form and submission handlers
  const handleNameUpdate = (e) => {
    const newName = e.target.value;

    if (newName.length < 15) {
      setName(newName);
    }
  };

  const animateClose = () => {
    setIsOpaque(true);
    setIsOpen(false);
  };

  const handleNameSubmission = (e) => {
    e.preventDefault();

    if (name) {
      dispatch(startSetName(name));
      animateClose();
    }
  };

  const handleCloseModal = () => {
    if (name) {
      dispatch(startSetName(name));
      animateClose();
    }
  };

  const removeOpacity = () => {
    setIsOpaque(false);
  };

  return (
    <div>
      <Modal
        className={classnames('modal', 'modal--triangle', 'modal--name', {
          'modal--opaque': isOpaque,
        })}
        closeTimeoutMS={NORMAL_TIME}
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        onAfterOpen={removeOpacity}
        ariaHideApp={false}
      >
        <div className="modal__top-left-triangle" />
        <div className="modal__bottom-right-triangle" />
        <form className="modal__sub-container" onSubmit={handleNameSubmission}>
          <h2 className="modal__title">Your Name</h2>
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

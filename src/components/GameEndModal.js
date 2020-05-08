import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-modal';
import {NORMAL_TIME} from '../constants/animation';

const GameEndModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {mode} = useSelector((state) => state.game.gameState);

  useEffect(() => {
    if (mode === 'RED' || mode === 'BLUE') {
      setIsOpen(true);
    }
  }, [mode]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      className={`modal modal--${mode}`}
      isOpen={isOpen}
      closeTimeoutMS={NORMAL_TIME}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <div>
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseModal}
        >
          ✕
        </button>
        <h2 className="modal__title--winner">Winner!</h2>
        <h2 className="modal__title--winner">{`${mode}`}</h2>
      </div>
    </Modal>
  );
};

export default GameEndModal;

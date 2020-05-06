import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-modal';
import {startNewGame} from '../actions/gameActions';

const GameEndModal = () => {
  const dispatch = useDispatch();

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
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <div>
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseModal}
        >
          X
        </button>
        <h2 className="modal__title--winner">Winner!</h2>
        <h2 className="modal__title--winner">{`${mode}`}</h2>
      </div>
    </Modal>
  );
};

export default GameEndModal;

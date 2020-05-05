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

  const handleClickNewGame = () => {
    dispatch(startNewGame());
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <div>
        <p>{`${mode} wins!`}</p>
        <button type="button" onClick={handleClickNewGame}>
          New Game
        </button>
      </div>
    </Modal>
  );
};

export default GameEndModal;

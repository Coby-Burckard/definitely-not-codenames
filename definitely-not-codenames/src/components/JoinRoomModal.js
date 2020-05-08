import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';
import {NORMAL_TIME} from '../constants/animation';
import {setJoinRoomModal} from '../actions/modalActions';

const JoinRoomModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isOpen = useSelector((state) => state.modals.joinRoom);

  const [gameID, setGameID] = useState('');

  const handleGameIDChange = (e) => {
    setGameID(e.target.value);
  };

  const handleGameIDSubmit = (e) => {
    e.preventDefault();
    history.push(`/game/${gameID}`);
  };

  const handleCloseModal = () => {
    dispatch(setJoinRoomModal(false));
  };

  return (
    <Modal
      className="modal modal--TAN"
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
        <form onSubmit={handleGameIDSubmit} className="modal__sub-container">
          <h2 className="modal__title">Input Game ID</h2>
          <input
            className="modal__input--join"
            type="text"
            onChange={handleGameIDChange}
            value={gameID}
            autoFocus
          />
          <button type="submit" className="modal__button--join">
            Join Game
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default JoinRoomModal;

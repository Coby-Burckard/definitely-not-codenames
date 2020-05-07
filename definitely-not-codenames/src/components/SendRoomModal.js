import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-modal';
import {NORMAL_TIME} from '../constants/animation';
import {setSendRoomModal} from '../actions/modalActions';

const SendRoomModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.sendRoom);
  let {team} = useSelector((state) => state.user);

  if (!(team === 'BLUE') && !(team === 'RED')) {
    team = 'TAN';
  }

  const code = window.location.pathname.split('/')[2];

  const handleCloseModal = () => {
    dispatch(setSendRoomModal(false));
  };

  return (
    <Modal
      className={`modal modal--${team}`}
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
          X
        </button>
        <h2 className="modal__title">Send Invite</h2>
        <h2 className="modal__sub-title">
          Copy the URL or the below code and send it to your friends
        </h2>
        <div className="modal__code-container">
          <h2 className="modal__title--code">{code}</h2>
        </div>
      </div>
    </Modal>
  );
};

export default SendRoomModal;

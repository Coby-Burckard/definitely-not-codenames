import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSendRoomModal, setTeamModal} from '../actions/modalActions';

const SendRoomModalButton = () => {
  const dispatch = useDispatch();
  let {team} = useSelector((state) => state.user);

  if (!team) {
    team = 'TAN';
  }

  const openSendRoom = () => {
    dispatch(setTeamModal(false))
    dispatch(setSendRoomModal(true));
  };

  return (
    <button
      className={`turn-dashboard__button--${team}`}
      type="button"
      onClick={openSendRoom}
    >
      Send Link
    </button>
  );
};

export default SendRoomModalButton;

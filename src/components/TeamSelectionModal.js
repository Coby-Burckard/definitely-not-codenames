import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-modal';
import {NORMAL_TIME} from '../constants/animation';
import {setTeamModal} from '../actions/modalActions';
import TeamSelection from './TeamSelection'

const TeamSelectionModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.team);
  let {team} = useSelector((state) => state.user);

  if (!(team === 'BLUE') && !(team === 'RED')) {
    team = 'TAN';
  }

  const handleCloseModal = () => {
    dispatch(setTeamModal(false));
  };

  return (
    <Modal
      className={`modal modal--team-selection`}
      isOpen={isOpen}
      closeTimeoutMS={NORMAL_TIME}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <div>
        <button
          className="modal__close-button modal__close-button--team-selection"
          type="button"
          onClick={handleCloseModal}
        >
          ✕
        </button>
        <TeamSelection />
      </div>
    </Modal>
  );
};

export default TeamSelectionModal;

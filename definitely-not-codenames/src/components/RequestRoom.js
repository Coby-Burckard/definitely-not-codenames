import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {startGetRoom} from '../actions/roomActions';

const RequestRoom = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const roomId = useSelector((state) => state.room.id);
  useEffect(() => {
    if (roomId) {
      history.push(`/game/${roomId}`);
    }
  }, [roomId, history]);

  const handleClick = () => {
    dispatch(startGetRoom());
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        Create a New Room
      </button>
    </div>
  );
};

export default RequestRoom;

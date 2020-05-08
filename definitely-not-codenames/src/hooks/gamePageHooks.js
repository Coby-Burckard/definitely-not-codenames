import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setRoom} from '../actions/roomActions';
import {setIsValidRoom} from '../actions/errorActions';

const useIsRoomValid = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {isValidRoom} = useSelector((state) => state.error);

  useEffect(() => {
    if (isValidRoom === 'room_not_found') {
      dispatch(setIsValidRoom({isValid: null}));
      history.push('/');
    }
    dispatch(setRoom(null));
  }, [isValidRoom]);
};

export {useIsRoomValid};

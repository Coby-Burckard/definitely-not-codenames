import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { startPing } from '../actions/gameActions'

const usePingPong = () => {
  //Sending a message to the server every 30s to keep the connection alive

  const dispatch = useDispatch();

  const {pong} = useSelector(state => state.game)
  console.log('ping')
  useEffect(() => {
    setTimeout(() => {
      dispatch(startPing)
    },30000)
  }, [pong, dispatch])
}

export {usePingPong}
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { startPing } from '../actions/gameActions'

const usePingPong = () => {
  //Sending a message to the server every 30s to keep the connection alive

  const dispatch = useDispatch();

  const {pong} = useSelector(state => state.room)

  useEffect(() => {
    setTimeout(() => {
      dispatch(startPing(pong))
    },3000)
  }, [pong, dispatch])
}

export {usePingPong}
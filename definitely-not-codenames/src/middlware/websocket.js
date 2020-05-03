import receiver from './receiver';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (store) => (event) => {
    // store.dispatch(actions.wsConnected(event.target.url));
  };

  const onClose = (store) => () => {
    // store.dispatch(actions.wsDisconnected());
  };

  const onMessage = ({dispatch}) => (event) => {
    receiver(dispatch, event.data);
  };

  return (store) => (next) => (action) => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case 'WS_SEND':
        socket.send(JSON.stringify(action.payload));
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();

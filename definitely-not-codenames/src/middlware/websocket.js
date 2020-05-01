import receiver from "./receiver";

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (store) => (event) => {
    console.log("websocket connected", event.target.url);
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
      case "WS_CONNECT":
        if (socket !== null) {
          console.log("closing socket");
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case "WS_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log("websocket closed");
        break;
      case "WS_SEND":
        console.log("sending a message", action.payload);
        socket.send(JSON.stringify(action.payload));
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
